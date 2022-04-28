# frozen_string_literal: true

module Resolvers
  class TransportationsResolver < GraphQL::Schema::Resolver
    type [Types::TransportationType], null: false
    argument :guest_ids, [Types::Identifier], required: true
    argument :event_id, Types::Identifier, required: true

    def resolve(guest_ids:, event_id:)
      Transportation.select('guest_id as id, array_agg(journey) as journeys, event_id, guest_id')
                    .where(event_id: event_id, guest_id: guest_ids)
                    .group(:event_id, :guest_id).reorder('')
    end
  end
end
