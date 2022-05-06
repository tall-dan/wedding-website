# frozen_string_literal: true

class Event < ApplicationRecord
  PRIORITY = %w[rehearsal_dinner reception].freeze
  scope :rehearsal_dinner, -> { find_by(name: 'rehearsal_dinner') }
  scope :reception, -> { find_by(name: 'reception') }

  def priority
    PRIORITY.index(name)
  end
end
