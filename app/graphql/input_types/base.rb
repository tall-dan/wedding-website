# frozen_string_literal: true

module InputTypes
  class Base < GraphQL::Schema::InputObject
    def self.creating_new_record?
      name.include?('New')
    end
  end
end
