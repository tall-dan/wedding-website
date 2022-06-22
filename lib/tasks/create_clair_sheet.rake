# frozen_string_literal: true

task create_clair_sheet: :environment do
  require 'csv'

  headers = %w[Table Guest Chicken Beef Veg Tenders Notes/Allergies/Requests]
  outfile = File.open('seating_chart.csv', 'w+')
  csv = CSV.new(outfile, write_headers: true, headers: headers)
  ungrouped_invites = Invite.reception_invites.where(status: 'accepted').order(:table_number).includes(:guest)
  ungrouped_invites.group_by(&:table_number).map do |table_number, invites|
    csv << ['', table_number.upcase]
    chicken_total = short_ribs_total = mushroom_total = chicken_tenders_total = 0
    invites.sort_by { |i| i.guest.last_name }.each_with_index do |invite, index|
      chicken = invite.guest.meal_selection.selection == 'Organic Airline Chicken Breast' ? 1 : ''
      short_ribs = invite.guest.meal_selection.selection == 'Braised Beef Short Ribs' ? 1 : ''
      mushroom = invite.guest.meal_selection.selection  == 'Mushroom Risotto' ? 1 : ''
      chicken_tenders = invite.guest.meal_selection.selection == 'Chicken Tenders' ? 1 : ''
      notes = invite.guest.kid? ? 'Under 21' : ''
      csv << [index + 1, invite.guest.display_name, chicken, short_ribs, mushroom, chicken_tenders, notes]
      %w[chicken short_ribs mushroom chicken_tenders].each do |meal|
        eval("#{meal}_total += 1") if eval(meal).present?
      end
    end
    csv << []
    csv << ['', 'TOTAL', chicken_total, short_ribs_total, mushroom_total, chicken_tenders_total]
    csv << []
  end
end

task create_alpha_order_guest_list: :environment do
  require 'csv'

  headers = %w[Count Blank Table# Last First Notes]
  outfile = File.open('alpha_order_guest_list.csv', 'w+')
  csv = CSV.new(outfile, write_headers: true, headers: headers)
  guests = Guest.includes(:invites).where(
    invites: { event_id: Event.reception, status: 'accepted' }
  ).order(:last_name, :first_name)
  guests.each_with_index do |guest, index|
    csv << [index + 1, '', guest.invites[0].table_number, guest.last_name.titleize, guest.first_name.titleize]
  end
end
