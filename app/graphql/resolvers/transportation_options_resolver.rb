# frozen_string_literal: true

module Resolvers
  class TransportationOptionsResolver < GraphQL::Schema::Resolver
    type [String], null: false
    argument :event_id, Types::Identifier, required: true

    def resolve(event_id:)
      event = Event.find(event_id)
      Transportation.options[event.name.downcase]
    end
  end
end
