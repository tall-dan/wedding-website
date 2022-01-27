# frozen_string_literal: true

class ApplicationController < ActionController::API
  def pulse_check
    head :ok
  end
end
