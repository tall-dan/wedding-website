# frozen_string_literal: true

module Resolvers
  class GuestsResolver < GraphQL::Schema::Resolver
    type [Types::GuestType], null: false
    argument :name, String, required: true

    def resolve(name:)
      first_name, last_name = name.to_s.partition(' ').map(&:strip).map(&:downcase).select(&:present?)
      # there are guests that have the same name. So where, not find_by
      guests = Guest.where("first_name || ' ' || last_name = ?", "#{first_name} #{last_name}")
      guests.flat_map(&:guest_party)
    end
  end
end
