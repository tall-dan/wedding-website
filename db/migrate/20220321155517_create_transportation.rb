class CreateTransportation < ActiveRecord::Migration[6.1]
  def change
    create_table :transportations do |t|
      t.string :journey, null: false
      t.timestamps null: false
      t.bigint "event_id", null: false
      t.bigint "guest_id", null: false
      t.index ["event_id"], name: "index_transporations_on_event_id"
      t.index ["guest_id"], name: "index_transporations_on_guest_id"
    end
  end
end
