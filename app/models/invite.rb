# frozen_string_literal: true

class Invite < ApplicationRecord
  belongs_to :guest
  belongs_to :event
  scope :rehearsal_dinner_invites, -> { joins(:event).where(event: Event.rehearsal_dinner) }
  scope :reception_invites, -> { joins(:event).where(event: Event.reception) }

  delegate :priority, to: :event
  after_update :remove_stuff_from_declinees

  def declined?
    status == 'declined'
  end

  def accepted?
    status == 'accepted'
  end

  private

  def remove_stuff_from_declinees
    reload

    return unless event == Event.reception
    return unless declined?

    guest.transportations.destroy_all
    guest.meal_selection&.destroy
  end
end
