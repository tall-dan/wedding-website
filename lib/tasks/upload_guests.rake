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
