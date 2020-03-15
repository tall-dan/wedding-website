# frozen_string_literal: true

module Types
  class GuestType < GraphQL::Schema::Object
    field :first_name, GraphQL::Types::String, null: false
    field :last_name, GraphQL::Types::String, null: false
  end
end
