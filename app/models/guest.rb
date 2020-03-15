# frozen_string_literal: true

class Guest < ApplicationRecord
  has_many :guest_party, foreign_key: :guest_party_id, primary_key: :guest_party_id, class_name: 'Guest'

  before_save :downcase_names

  private

  def downcase_names
    first_name.downcase!
    last_name.downcase!
  end
end
