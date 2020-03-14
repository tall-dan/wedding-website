class CreateMealSelections < ActiveRecord::Migration[6.0]
  def change
    create_table :meal_selections do |t|
      t.string :description, null: false

      t.timestamps null: false
    end
  end
end
