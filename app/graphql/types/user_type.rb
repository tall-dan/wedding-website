# frozen_string_literal: true

module Types
  class UserType < GraphQL::Schema::Object
    field :id, GraphQL::Types::ID, null: false
    field :email, GraphQL::Types::String, null: false, description: 'Email address for a user'
    field :first_name, GraphQL::Types::String, null: false
    field :last_name, GraphQL::Types::String, null: false

    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
