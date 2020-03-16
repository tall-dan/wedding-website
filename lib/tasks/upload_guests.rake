# frozen_string_literal: true

task :upload_guests, [:file_path] => :environment do |_t, args|
  require 'csv'
  require_relative 'guests_from_row'

  Guest.delete_all
  CSV.read(args[:file_path], headers: true).each_with_index do |row, index|
    guests = GuestsFromRow.new(row).extract
    guests.each do |guest|
      guest.guest_party_id = index
      guest.run_callbacks(:save)
    end
    Guest.import guests
  end
  Guest.find_by(first_name: 'ms. joan mclaughlin').update(first_name: 'Joan', last_name: 'McLaughlin')
end
