# frozen_string_literal: true

class Event < ApplicationRecord
  PRIORITY = %w[rehearsal_dinner reception].freeze
  def priority
    PRIORITY.index(name)
  end
end
