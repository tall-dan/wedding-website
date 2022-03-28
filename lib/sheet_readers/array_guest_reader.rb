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

  def street_address_1
    row[2]
  end

  def street_address_2
    row[3]
  end

  def street_address_3
    row[4]
  end

  def city
    city_state_zip_column.split(',')[0]
  end

  def state
    city_state_zip_column.split(',')[1].match('\D+')[0].strip
  end

  def zip
    city_state_zip_column.match('\d+')[0]
  end

  def city_state_zip_column
    street_address_2.include?(',') ? street_address_2 : street_address_3
  end
end
