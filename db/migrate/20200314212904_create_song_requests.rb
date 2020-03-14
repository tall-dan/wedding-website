class CreateSongRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :song_requests do |t|
      t.string :user_input, null: false

      t.timestamps null: false
    end
  end
end
