# frozen_string_literal: true

class CreateGuests < ActiveRecord::Migration[6.0]
  def change
    create_table :guests do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false

      t.timestamps null: false
    end
  end
end
