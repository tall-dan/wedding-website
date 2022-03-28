# frozen_string_literal: true

module Types
  class InviteType < GraphQL::Schema::Object
    field :id, ::Types::Identifier, null: false
    field :guest, Types::GuestType, null: false
    field :event, Types::EventType, null: false
    field :status, String, null: false
  end
end
