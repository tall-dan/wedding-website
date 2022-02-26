# frozen_string_literal: true
task :upload_guests, [:file_path] => :environment do |_t, args|
  if args[:file_path]
    require 'csv'
    require 'sheet_readers/csv_row_guest_reader'
    source = CSV.read(args[:file_path], headers: true)
    reader = CsvRowGuestReader
  else
    require 'google_guest_reader'
    require 'sheet_readers/array_guest_reader'
    source = GoogleGuestReader.read.values
    reader = ArrayGuestReader
  end

  Guest.delete_all
  source.each_with_index do |row, index|
    guests = reader.new(row).extract
    guests.each do |guest|
      guest.guest_party_id = index
      guest.run_callbacks(:save)
    end
    Guest.import guests
  end
  Guest.find_by(last_name: 'morilla').update(last_name: 'diaz morilla')
  Guest.find_by(first_name: 'ms. joan mclaughlin').update(first_name: 'Joan', last_name: 'McLaughlin')
  Guest.where(last_name: 'mcweiner').update(last_name: 'weiner')
  Guest.where(last_name: 'weiner', first_name: 'guest').update(first_name: 'guest', last_name: 'weiner')

  # TODO: this should really be in something like db seed
  guests_with_invites = Invite.where(guest_id: Guest.all.ids).includes(:guest).map(&:guest)
  reception = Event.find_or_create_by(name: 'reception')
  new_invites = (Guest.all - guests_with_invites).map do |guest|
    Invite.new(status: 'pending', guest_id: guest.id, event_id: reception.id)
  end
  Invite.import new_invites
end
# rubocop:enable Metrics/CyclomaticComplexity
