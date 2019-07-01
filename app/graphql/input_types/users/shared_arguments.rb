# frozen_string_literal: true

module InputTypes
  module Users
    module SharedArguments
      extend ActiveSupport::Concern
      included do
        argument :email, GraphQL::Types::String, required: creating_new_record?, description: 'Email address for a user'
        argument :first_name, GraphQL::Types::String, required: creating_new_record?
        argument :last_name, GraphQL::Types::String, required: creating_new_record?
      end
    end
  end
end
