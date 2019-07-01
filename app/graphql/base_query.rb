# frozen_string_literal: true

class BaseQuery < Types::Base
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :current_user, Types::UserType, null: true, description: 'The currently signed in user'

  def current_user
    context[:current_user]
  end
end
