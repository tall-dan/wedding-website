# frozen_string_literal: true

module InputTypes
  class Invite < InputTypes::Base
    graphql_name 'InviteInput'

    argument :invite_id, Types::Identifier, required: true
    argument :status, GraphQL::Types::String, required: true

    delegate slice: :to_h
  end
end
