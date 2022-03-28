# frozen_string_literal: true

require 'google_sheet_reader'

class Guest < ApplicationRecord
  has_many :guest_party, foreign_key: :guest_party_id, primary_key: :guest_party_id, class_name: 'Guest'

  after_initialize :downcase_names

  def kid?
    self.class.kids_names.include?("#{first_name} #{last_name}")
  end

  def self.kids_names
    @kids_names ||= GoogleSheetReader.new('Kids Meals').read('A2:A30').compact.flatten
  end

  private

  def downcase_names
    first_name&.downcase!
    last_name&.downcase!
  end
end
