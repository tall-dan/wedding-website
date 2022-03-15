# frozen_string_literal: true

module InputTypes
  class Guest < InputTypes::Base
    graphql_name 'GuestInput'

    argument :guest_id, Types::Identifier

    delegate slice: :to_h
  end
end
