# frozen_string_literal: true

module Mutations
  class SelectTransportation < ::GraphQL::Schema::Mutation
    null false
    argument :selection, InputTypes::TransportationSelection, required: true
    field :success, GraphQL::Types::Boolean, null: false

    def resolve(selection:)
      selection.going ? add_transport(selection) : delete_transport(selection)
      { success: true }
    end

    private

    def delete_transport(transport)
      Transportation.where(transport.to_h.except(:going)).delete_all
    end

    def add_transport(transport)
      Transportation.create!(transport.to_h.except(:going))
    end
  end
end
