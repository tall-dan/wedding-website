# frozen_string_literal: true

class MealSelection < ApplicationRecord
  belongs_to :guest
  belongs_to :event

  def options
    guest.kid? ? (adult_options + kid_options) : adult_options
  end

  private

  def kid_options
    ['Chicken Tenders']
  end

  def adult_options
    ['Organic Airline Chicken Breast', 'Braised Beef Short Ribs', 'Mushroom Risotto']
  end
end
