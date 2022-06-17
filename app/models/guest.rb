# frozen_string_literal: true

require 'google_sheet_reader'

class Guest < ApplicationRecord
  has_many :guest_party, foreign_key: :guest_party_id, primary_key: :guest_party_id, class_name: 'Guest'
  has_many :invites
  has_one :meal_selection
  has_many :transportations

  after_initialize :downcase_names, :strip_names

  def kid?
    self.class.kids_names.include?("#{first_name} #{last_name}")
  end

  def self.kids_names
    @kids_names ||= GoogleSheetReader.new('Kids Meals').read('A2:A30').compact.flatten
  rescue StandardError
    []
  end

  def rehearsal_dinner_invite
    invites.rehearsal_dinner_invites[0]
  end

  def reception_invite
    invites.reception_invites[0]
  end

  def display_name
    [first_name, last_name].map(&:titleize).join(' ')
  end

  def favor_filename
    "#{display_name}-#{id}".gsub(' ', '_')
  end

  private

  def downcase_names
    first_name&.downcase!
    last_name&.downcase!
  end

  def strip_names
    first_name&.strip!
    last_name&.strip!
  end
end
