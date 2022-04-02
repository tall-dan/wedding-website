# frozen_string_literal: true

class ApplicationController < ActionController::API
  def pulse_check
    head :ok
  end

  def airbrake_config
    config = Airbrake.notice_notifier.instance_variable_get('@config') # HACK: reuse what's in initializers/airbrake
    render json: {
      host: config.host,
      projectId: config.project_id,
      projectKey: config.project_key
    }
  end
end
