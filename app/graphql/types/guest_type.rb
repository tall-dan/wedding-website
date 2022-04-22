# frozen_string_literal: true

module Types
  class GuestType < GraphQL::Schema::Object
    field :id, ::Types::Identifier, null: false
    field :first_name, GraphQL::Types::String, null: false
    field :last_name, GraphQL::Types::String, null: false
    field :display_name, GraphQL::Types::String, null: false
    field :guest_party_id, ::Types::Identifier, null: false

    def display_name
      [object.first_name, object.last_name].map(&:titleize).join(' ')
    end
  end
end
