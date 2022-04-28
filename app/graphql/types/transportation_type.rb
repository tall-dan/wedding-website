# frozen_string_literal: true

module Types
  class TransportationType < GraphQL::Schema::Object
    field :id, ::Types::Identifier, null: false
    field :guest, Types::GuestType, null: false
    field :event, Types::EventType, null: false
    field :journeys, [String], null: false
  end
end
