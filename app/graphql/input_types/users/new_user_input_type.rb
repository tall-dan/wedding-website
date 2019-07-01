# frozen_string_literal: true

module InputTypes
  module Users
    class NewUserInputType < InputTypes::Base
      include InputTypes::Users::SharedArguments
    end
  end
end
