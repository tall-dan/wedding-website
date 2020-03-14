class RefIntegrity < ActiveRecord::Migration[6.0]
  def change
    add_reference :guests, :user, foreign_key: true
    add_reference :guests, :guest_party, foreign_key: true, null: false
    add_reference :invites, :guest, foreign_key: true, null: false
    add_reference :invites, :event, foreign_key: true, null: false
    add_reference :meal_selections, :event, foreign_key: true, null: false
    add_reference :meal_selections, :guest, foreign_key: true, null: false
  end
end
