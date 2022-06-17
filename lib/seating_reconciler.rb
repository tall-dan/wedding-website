# frozen_string_literal: true

require 'google_sheet_reader'

class SeatingReconciler
  attr_reader :sheet
  def initialize
    reader = GoogleSheetReader.new('Seating')
    @sheet = reader.read('A1:Q19')
  end

  def reconcile
    guests = Guest.includes(:invites).where(invites: { event_id: Event.reception }).all.group_by(&:display_name)
    table_numbers = sheet[0]
    invite_updates = sheet[1..-1].each_with_object({}) do |row, updates|
      row.each_with_index do |guest, table_index|
        table = table_numbers[table_index]
        Array(guests[guest.strip]).flat_map(&:invites).each do |invite|
          updates[invite.id] = { table_number: table }
        end
      end
    end
    # This doesn't actually save db trips. Would be nice to have
    Invite.update(invite_updates.keys, invite_updates.values)
  end
end
