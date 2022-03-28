# frozen_string_literal: true

module Mutations
  class SelectMeal < ::GraphQL::Schema::Mutation
    null false
    argument :selections, [InputTypes::MealSelection], required: true
    field :success, GraphQL::Types::Boolean, null: false

    def resolve(selections:)
      selections.each do |selection|
        selection.id ? update_meal_selection(selection) : create_meal_selection(selection)
      end
      { success: true }
    end

    def update_meal_selection(selection)
      MealSelection.find(selection.id).update!(selection: selection.selection)
    end

    def create_meal_selection(selection)
      MealSelection.create!(selection.to_h)
    end
  end
end
