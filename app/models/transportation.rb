# frozen_string_literal: true

class Transportation < ApplicationRecord
  belongs_to :guest
  belongs_to :event

  def self.options
    {
      'reception' => ['From Hotel to Church', 'From Church To Reception', 'From Reception to Hotel'],
      'rehearsal_dinner' => ['From Hotel to Dinner', 'From Dinner to Hotel']
    }
  end
end
