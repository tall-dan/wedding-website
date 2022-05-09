# frozen_string_literal: true

require 'google/apis/sheets_v4'
require 'googleauth'
require 'googleauth/stores/file_token_store'
require 'fileutils'

class GoogleSheetReader
  APPLICATION_NAME = 'Guest Sheet Reader'
  SCOPE = Google::Apis::SheetsV4::AUTH_SPREADSHEETS
  CREDENTIALS_PATH = 'config/credentials/google_credentials.json'
  SPREADSHEET_ID = '1jxDQSJmBhuDu_Nrt3iz_kz8tK4A4dT_YvqCaPbXX08Q'
  attr_reader :sheet

  def initialize(sheet)
    @sheet = sheet
  end

  # The file token.yaml stores the user's access and refresh tokens, and is
  # created automatically when the authorization flow completes for the first
  # time.
  def service
    sheets_service = Google::Apis::SheetsV4::SheetsService.new
    sheets_service.client_options.application_name = APPLICATION_NAME
    sheets_service.authorization = authorize
    sheets_service
  end

  def creds_from_env
    return nil unless ENV['GOOGLE_CREDENTIALS']

    StringIO.new(ENV['GOOGLE_CREDENTIALS'])
  end

  ##
  # Ensure valid credentials, either by restoring from the saved credentials
  # files or intitiating an OAuth2 authorization. If authorization is required,
  # the user's default browser will be launched to approve the request.
  #
  # @return [Google::Auth::UserRefreshCredentials] OAuth2 credentials
  def authorize
    Google::Auth::ServiceAccountCredentials.make_creds(
      json_key_io: creds_from_env || File.open(CREDENTIALS_PATH),
      scope: SCOPE
    ).tap(&:fetch_access_token!)
  end

  def read(range)
    service.get_spreadsheet_values(SPREADSHEET_ID, "#{sheet}!#{range}").values
  end

  def write(values, beginning_cell)
    range = calculate_range_filled_by(values, beginning_cell)
    sheet_with_range = "#{sheet}!#{range}"
    value_range = Google::Apis::SheetsV4::ValueRange.new(
      major_dimension: 'ROWS',
      range: sheet_with_range,
      values: values
    )
    service.update_spreadsheet_value(SPREADSHEET_ID, sheet_with_range, value_range, value_input_option: 'USER_ENTERED')
  end

  private

  def calculate_range_filled_by(values, beginning_cell)
    col, row = beginning_cell.match(/(\w+)(\d+)/).captures
    end_col = (col.ord + values.first.length).chr
    end_row = row.to_i + values.length
    end_cell = "#{end_col}#{end_row}"
    "#{beginning_cell}:#{end_cell}"
  end
end
