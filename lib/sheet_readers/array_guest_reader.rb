# frozen_string_literal: true

require_relative './guest_reader'

class ArrayGuestReader
  include GuestReader

  def address_column
    row[0]
  end

  def names_column
    row[1]
  end

  def guest_count
    row[5]
  end

  def rehearsal_dinner_column
    row[8]
  end
end
