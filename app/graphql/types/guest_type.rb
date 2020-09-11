# frozen_string_literal: true

module Types
  class GuestType < GraphQL::Schema::Object
    field :id, ::Types::Identifier, null: false
    field :first_name, GraphQL::Types::String, null: false
    field :last_name, GraphQL::Types::String, null: false
    field :display_name, GraphQL::Types::String, null: false

    # maybe handle all the Mc* capitalization here (FE just puts everything in all caps now)
    # is that something that active suport inflections can handle?
    def display_name
      [object.first_name, object.last_name].map(&:titleize).join(' ')
    end
  end
end
