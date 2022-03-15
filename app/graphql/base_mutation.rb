# frozen_string_literal: true

class BaseMutation < GraphQL::Schema::Object
  field :respond_to_invites, mutation: Mutations::RespondToInvite
  field :select_meal, mutation: Mutations::SelectMeal
end
