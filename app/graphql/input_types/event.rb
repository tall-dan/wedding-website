# frozen_string_literal: true

module InputTypes
  class Event < InputTypes::Base
    graphql_name 'EventInput'

    argument :event_id, Types::Identifier

    delegate slice: :to_h
  end
end
