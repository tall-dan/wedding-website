# frozen_string_literal: true

# TODO: would be nice to consolidate this w/ reader

class GoogleSheetWriter
  CREDENTIALS_PATH = 'config/credentials/google_credentials.json'
  attr_reader :sheet_name

  def initialize(sheet_name)
    @sheet_name = sheet_name
  end

  def session
    @session ||= GoogleDrive::Session.from_service_account_key(CREDENTIALS_PATH)
  end

  def sheet
    @sheet ||= session.spreadsheet_by_title(sheet_name)
  end
end
