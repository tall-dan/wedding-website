# frozen_string_literal: true

class ChangeMealSelectionDescriptionToSelection < ActiveRecord::Migration[6.1]
  def change
    rename_column :meal_selections, :description, :selection
  end
end
