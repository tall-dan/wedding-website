# frozen_string_literal: true

class MealSelection < ApplicationRecord
  belongs_to :guest
  belongs_to :event

  def options
    guest.is_kid? ? (adult_options + kid_options) : adult_options
  end

  private

  def kid_options
    ['Happy Meal']
  end

  def adult_options
    ['Chicken', 'Steak', 'Vegetarian*']
  end
end
