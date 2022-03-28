# frozen_string_literal: true

module InputTypes
  class MealSelection < InputTypes::Base
    graphql_name 'MealSelectionInput'

    argument :id, Types::Identifier, required: false
    argument :selection, GraphQL::Types::String, required: true
    argument :guest, ::InputTypes::Guest, as: :guest_id, prepare: lambda { |guest, _ctx|
      guest.guest_id
    }
    argument :event, ::InputTypes::Event, as: :event_id, prepare: lambda { |event, _ctx|
      event.event_id
    }

    delegate slice: :to_h
  end
end
