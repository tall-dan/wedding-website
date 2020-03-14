class CreateInvites < ActiveRecord::Migration[6.0]
  def change
    create_table :invites do |t|
      t.string :status, null: false, default: 'pending'

      t.timestamps null: false
    end
  end
end
