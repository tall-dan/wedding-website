# frozen_string_literal: true

require_relative './guest_reader'

class CsvRowGuestReader
  include GuestReader

  def address_column
    row['Guests Line 1:']
  end

  def names_column
    row['Guests Line 2:']
  end

  def guest_count
    row['Guest Count']
  end
end
