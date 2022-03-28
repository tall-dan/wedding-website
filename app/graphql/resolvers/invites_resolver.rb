# frozen_string_literal: true

module Resolvers
  class InvitesResolver < GraphQL::Schema::Resolver
    type [Types::InviteType], null: false
    argument :guest_ids, [Types::Identifier], required: true

    # TODO: make an enum https://graphql-ruby.org/type_definitions/enums
    argument :order_by, [GraphQL::Types::String], required: false

    def resolve(guest_ids:, order_by: [])
      invites = Invite.where(guest_id: guest_ids)
      order_by.include?('priority') ? invites.sort_by(&:priority) : invites
    end
  end
end
