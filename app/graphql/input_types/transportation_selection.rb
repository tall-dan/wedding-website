# frozen_string_literal: true

module InputTypes
  class TransportationSelection < InputTypes::Base
    graphql_name 'TransportationInput'

    argument :journey, String, required: true
    argument :going, GraphQL::Types::Boolean, required: true
    argument :guest, ::InputTypes::Guest, as: :guest_id, prepare: lambda { |guest, _ctx|
      guest.guest_id
    }, required: true
    argument :event, ::InputTypes::Event, as: :event_id, prepare: lambda { |event, _ctx|
      event.event_id
    }, required: true

    delegate slice: :to_h
  end
end
