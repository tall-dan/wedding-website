# frozen_string_literal: true

require 'google/apis/sheets_v4'
require 'googleauth'
require 'googleauth/stores/file_token_store'
require 'fileutils'

class GoogleGuestReader
  APPLICATION_NAME = 'Guest Sheet Reader'
  SCOPE = Google::Apis::SheetsV4::AUTH_SPREADSHEETS
  CREDENTIALS_PATH = 'config/credentials/google_credentials.json'
  class << self
    # The file token.yaml stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.

    def service
      sheets_service = Google::Apis::SheetsV4::SheetsService.new
      sheets_service.client_options.application_name = APPLICATION_NAME
      sheets_service.authorization = authorize
      sheets_service
    end

    ##
    # Ensure valid credentials, either by restoring from the saved credentials
    # files or intitiating an OAuth2 authorization. If authorization is required,
    # the user's default browser will be launched to approve the request.
    #
    # @return [Google::Auth::UserRefreshCredentials] OAuth2 credentials
    def authorize
      Google::Auth::ServiceAccountCredentials.make_creds(
        json_key_io: File.open(CREDENTIALS_PATH),
        scope: SCOPE
      ).tap(&:fetch_access_token!)
    end

    def read
      spreadsheet_id = '1jxDQSJmBhuDu_Nrt3iz_kz8tK4A4dT_YvqCaPbXX08Q'
      sheet = 'Wedding Invites - June 25 2022'
      range = 'A2:F140'
      service.get_spreadsheet_values spreadsheet_id, "#{sheet}!#{range}"
    end
  end
end
