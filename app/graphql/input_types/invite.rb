# frozen_string_literal: true

module InputTypes
  class Invite < InputTypes::Base
    graphql_name 'InviteInput'

    argument :status, GraphQL::Types::String, required: true
    argument :guest_id, Types::Identifier, required: true
    argument :event_id, Types::Identifier, required: true

    delegate slice: :to_h
  end
end
