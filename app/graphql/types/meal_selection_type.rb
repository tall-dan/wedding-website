# frozen_string_literal: true

module Types
  class MealSelectionType < GraphQL::Schema::Object
    field :id, ::Types::Identifier
    field :guest, Types::GuestType, null: false
    field :event, Types::EventType, null: false
    field :selection, String, null: false
  end
end
