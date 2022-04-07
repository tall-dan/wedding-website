# frozen_string_literal: true

class AddGuestPartyIdToGuest < ActiveRecord::Migration[6.1]
  def change
    add_column :guests, :guest_party_id, :bigint, null: false
    add_index :guests, :guest_party_id
  end
end
