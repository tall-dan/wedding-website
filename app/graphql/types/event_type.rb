# frozen_string_literal: true

module Types
  class EventType < GraphQL::Schema::Object
    field :name, GraphQL::Types::String, null: false
    field :id, ::Types::Identifier, null: false
  end
end
