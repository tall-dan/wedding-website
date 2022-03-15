# frozen_string_literal: true

module Resolvers
  class MealSelectionsResolver < GraphQL::Schema::Resolver
    type [Types::MealSelectionType], null: false
    argument :guest_ids, [Types::Identifier], required: true

    def resolve(guest_ids:)
      MealSelection.where(guest_id: guest_ids)
    end
  end
end
