# frozen_string_literal: true

module Resolvers
  class InvitesResolver < GraphQL::Schema::Resolver
    type [Types::InviteType], null: false
    argument :guest_ids, [Types::Identifier], required: true

    def resolve(guest_ids:)
      Invite.where(guest_id: guest_ids)
    end
  end
end
