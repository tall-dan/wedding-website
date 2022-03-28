# frozen_string_literal: true

module Mutations
  class RespondToInvite < ::GraphQL::Schema::Mutation
    null false
    argument :responses, [InputTypes::Invite], required: true
    field :success, GraphQL::Types::Boolean, null: false

    def resolve(responses:)
      responses.each do |response|
        invite = Invite.find(response.invite_id)
        invite.update(status: response.status)
      end
      { success: true }
    end
  end
end
