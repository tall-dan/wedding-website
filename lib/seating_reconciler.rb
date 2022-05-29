# frozen_string_literal: true

require 'google_sheet_reader'

class SeatingReconciler
  attr_reader :rows
  def initialize
    reader = GoogleSheetReader.new('Seating')
    @rows = reader.read('A2:Q11')
  end

  def reconcile
    guests = Guest.includes(:invites).where(invites: { event_id: Event.reception }).all.group_by(&:display_name)
    invite_updates = rows.each_with_object({}) do |row, updates|
      row.each_with_index do |guest, zero_indexed_table_number|
        Array(guests[guest]).flat_map(&:invites).each do |invite|
          updates[invite.id] = { table_number: zero_indexed_table_number + 1 }
        end
      end
    end
    # This doesn't actually save db trips. Would be nice to have
    Invite.update(invite_updates.keys, invite_updates.values)
  end
end
