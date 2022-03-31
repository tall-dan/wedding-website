# frozen_string_literal: true

unless Rails.env.test?
  Airbrake.configure do |config|
    config.host = 'http://errors.mcschepers-wedding.com'
    config.project_id = 1 # required, but any positive integer works
    config.project_key = Rails.application.credentials.airbrake[:project_key]

    # airbrake.io supports various features that are out of scope for
    # Errbit. Disable them:
    config.job_stats           = false
    config.query_stats         = false
    config.performance_stats   = false
    config.remote_config       = false

    config.environment = Rails.env
  end
end
