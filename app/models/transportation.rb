# frozen_string_literal: true

class Transportation < ApplicationRecord
  belongs_to :guest
  belongs_to :event

  def self.options
    {
      'reception' => ['From Hotel to Church', 'From Church to Reception', 'From Reception to Hotel'],
      'rehearsal_dinner' => ['From Hotel to Dinner', 'From Dinner to Hotel']
    }
  end

  options.each do |(event_name, journeys)|
    journeys.each do |journey|
      scope journey.downcase.gsub(' ', '_'), -> { where(journey: journey, event: Event.send(event_name)) }
    end
  end
end
