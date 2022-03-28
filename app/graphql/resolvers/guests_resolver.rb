# frozen_string_literal: true

module Resolvers
  class GuestsResolver < GraphQL::Schema::Resolver
    type [Types::GuestType], null: false
    argument :name, String, required: true

    def resolve(name:)
      first_name, last_name = name.match(/(.*)\W+(\w+)$/).captures.map(&:downcase)
      guest = Guest.find_by(first_name: first_name, last_name: last_name)
      Array(guest&.guest_party)
    end
  end
end
