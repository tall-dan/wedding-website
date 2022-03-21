# frozen_string_literal: true

module Resolvers
  class MealSelectionsResolver < GraphQL::Schema::Resolver
    type [Types::MealSelectionType], null: false
    argument :guest_ids, [Types::Identifier], required: true
    argument :event_id, Types::Identifier, required: true

    def resolve(guest_ids:, event_id:)
      existing_selections = MealSelection.where(guest_id: guest_ids, event_id: event_id)
      event = Event.find(event_id)
      guest_ids.map do |guest_id|
        guest_selection = existing_selections.detect { |sel| sel.guest_id == guest_id.to_i }
        guest_selection || MealSelection.new(guest_id: guest_id, event: event)
      end
    end
  end
end
