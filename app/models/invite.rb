# frozen_string_literal: true

class Invite < ApplicationRecord
  belongs_to :guest
  belongs_to :event
end
