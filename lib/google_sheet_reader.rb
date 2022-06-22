# frozen_string_literal: true

require 'google/apis/sheets_v4'
require 'googleauth'
require_relative './google_auth'
require 'googleauth/stores/file_token_store'
require 'fileutils'

class GoogleSheetReader
  SPREADSHEET_ID = '1jxDQSJmBhuDu_Nrt3iz_kz8tK4A4dT_YvqCaPbXX08Q'
  include GoogleAuth
  attr_reader :sheet

  def initialize(sheet)
    @sheet = sheet
    @g_service = Google::Apis::SheetsV4::SheetsService.new
    @application_name = 'Guest Sheet Reader'
    @scope = Google::Apis::SheetsV4::AUTH_SPREADSHEETS
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
