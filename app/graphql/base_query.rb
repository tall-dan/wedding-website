# frozen_string_literal: true

class BaseQuery < Types::Base
  field :guests, description: 'Invited Guests', resolver: Resolvers::GuestsResolver
  field :invites, description: 'Invites', resolver: Resolvers::InvitesResolver
  field :meal_selections, description: 'Invites', resolver: Resolvers::MealSelectionsResolver
  field :transportations, description: 'Per-Guest selections of transport', resolver: Resolvers::TransportationsResolver
  field :transportation_options, description: 'Options for transport', resolver: Resolvers::TransportationOptionsResolver
end
