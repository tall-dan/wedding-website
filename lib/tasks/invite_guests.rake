# frozen_string_literal: true
class Inviter
  class << self
    def invite(event_name, guests)
      event = Event.find_or_create_by(name: event_name)
      existing_invites = Invite.where(guest_id: guests.ids, event_id: event.id).includes(:guest)
      new_invites = (guests - existing_invites.map(&:guest)).map do |guest|
        Invite.new(status: 'pending', guest_id: guest.id, event_id: event.id)
      end
      Invite.import new_invites
    end
  end
end

task :invite_guests_to_reception, [:file_path] => :environment do |_t, args|
  Inviter.invite('reception', Guest.all)
end

task :invite_guests_to_rehearsal_dinner, [:file_path] => :environment do |_t, args|
  require 'sheet_readers/guest_reader'
  reader, source = GuestReader.reader_with_source(args[:file_path])

  invited_parties = source.inject([]) do |guest_party_ids, entry|
    party = reader.new(entry)
    if party.invited_to_rehearsal_dinner?
      guests = party.extract
      party_ids = guests.map { |guest| Guest.where(guest.attributes.compact).map(&:guest_party_id) }
      guest_party_ids << party_ids.compact.uniq
    end
    guest_party_ids
  end

  invited_guests = Guest.where(guest_party_id: invited_parties.flatten)
  Inviter.invite('rehearsal_dinner', invited_guests)
end
