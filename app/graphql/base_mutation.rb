# frozen_string_literal: true

class BaseMutation < GraphQL::Schema::Object
  field :respond_to_invite, mutation: Mutations::RespondToInvite
end
