# frozen_string_literal: true

module Resolvers
  class GuestsResolver < GraphQL::Schema::Resolver
    type [Types::GuestType], null: false
    argument :name, String, required: true

    def resolve(name:)
      first_name, last_name = name.match(/(\w+)\W*(\w+)$/).captures.map(&:downcase)
      # there are guests that have the same name. So where, not find_by
      guests = Guest.where(first_name: first_name, last_name: last_name)
      guests.flat_map(&:guest_party)
    end
  end
end
