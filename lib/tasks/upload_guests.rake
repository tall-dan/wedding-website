# frozen_string_literal: true

task :upload_guests, [:file_path] => :environment do |_t, args|
  require 'sheet_readers/guest_reader'
  reader, source = GuestReader.reader_with_source(args[:file_path])

  Guest.delete_all
  all_guests = source.flat_map.with_index do |row, index|
    guests = reader.new(row).extract
    guests.each do |guest|
      guest.guest_party_id = index
    end
  end
  Guest.import all_guests
  Rake::Task['invite_guests_to_reception'].invoke
  Rake::Task['invite_guests_to_rehearsal_dinner'].invoke

  # TODO: this should really be in something like db seed
end

task create_minted_friendly_csv: :environment do
  require 'sheet_readers/guest_reader'
  require 'csv'
  reader, source = GuestReader.reader_with_source
  outfile = File.open('minted_addresses.csv', 'w+')
  headers = [
    'Name on Envelope', 'Street Address 1', 'Street Address 2 (Optional)', 'City',
    'State/Region', 'Zip/Postal Code', 'Country', 'Email (Optional)', 'Phone (Optional)'
  ]
  source.each_with_object(CSV.new(outfile, write_headers: true, headers: headers)) do |row, csv|
    parsed_row = reader.new(row)
    next if row[0].blank?

    csv << [
      parsed_row.address_column,
      parsed_row.street_address_1,
      parsed_row.street_address_2 == parsed_row.city_state_zip_column ? '' : parsed_row.street_address_2,
      parsed_row.city,
      parsed_row.state,
      parsed_row.zip,
      'US'
    ]
  end
end
