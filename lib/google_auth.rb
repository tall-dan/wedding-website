# frozen_string_literal: true

module GoogleAuth
  # SCOPE = Google::Apis::DocsV1::AUTH_DOCUMENTS
  CREDENTIALS_PATH = 'config/credentials/google_credentials.json'
  attr_reader :g_service, :application_name, :scope

  # Ensure valid credentials, either by restoring from the saved credentials
  # files or intitiating an OAuth2 authorization. If authorization is required,
  # the user's default browser will be launched to approve the request.
  #
  # @return [Google::Auth::UserRefreshCredentials] OAuth2 credentials
  def authorize
    Google::Auth::ServiceAccountCredentials.make_creds(
      json_key_io: creds_from_env || File.open(CREDENTIALS_PATH),
      scope: scope
    ).tap(&:fetch_access_token!)
  end

  def creds_from_env
    return nil unless ENV['GOOGLE_CREDENTIALS']

    StringIO.new(ENV['GOOGLE_CREDENTIALS'])
  end

  # The file token.yaml stores the user's access and refresh tokens, and is
  # created automatically when the authorization flow completes for the first
  # time.
  def service
    return @service if @service

    docs_service = g_service
    docs_service.client_options.application_name = application_name
    docs_service.authorization = authorize
    @service = docs_service
  end
end
