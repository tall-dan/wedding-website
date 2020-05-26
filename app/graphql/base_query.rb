# frozen_string_literal: true

class BaseQuery < Types::Base
  field :guests, description: 'Invited Guests', resolver: Resolvers::GuestsResolver
  field :invites, description: 'Invites', resolver: Resolvers::InvitesResolver
end
