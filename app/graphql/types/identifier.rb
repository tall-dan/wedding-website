# frozen_string_literal: true

module Types
  class Identifier < GraphQL::Schema::Scalar
    graphql_name 'Identifier'
    description 'Represents a unique identifier that is Base64 obfuscated.'
    default_scalar true

    def self.coerce_result(value, _ctx)
      Base64.urlsafe_encode64(value.to_s)
    end

    def self.coerce_input(value, _ctx)
      Base64.urlsafe_decode64(value)
    end
  end
end
