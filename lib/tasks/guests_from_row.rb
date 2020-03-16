# frozen_string_literal: true

class GuestsFromRow
  attr_reader :row

  def initialize(row)
    @row = row
  end

  def extract
    return single_guest if single_guest?
    return family if family?
    return married_couple if married_couple?
    return single_with_guest if single_with_guest?
    return couple_with_different_names if couple_with_different_names?
  end

  def single_guest?
    !address_column.include?('&')
  end

  def single_guest
    first_name = names_column
    last_name = address_column.split(' ').last
    [Guest.new(first_name: first_name, last_name: last_name)]
  end

  def family?
    address_column.include?('& Family')
  end

  # rubocop:disable Metrics/AbcSize
  def family
    last_name = address_column.match(/(.*) & Family/)[1].split(' ').last
    first_names = names_column.gsub(', and', ',').split(', ')

    0.upto(guest_count.to_i - 1).with_object([]) do |i, guests|
      first_name = first_names[i].presence || last_name
      last_name = first_names[i].present? ? last_name : 'Guest'
      guests << Guest.new(first_name: first_name, last_name: last_name)
    end
  end
  # rubocop:enable Metrics/AbcSize

  def married_couple?
    address_column.include?('r. & Mrs.')
  end

  def married_couple
    last_name = address_column.split(' ').last
    first_names = names_column.split(' and ')
    first_names.map { |first_name| Guest.new(first_name: first_name, last_name: last_name) }
  end

  def single_with_guest?
    address_column.ends_with?('& Guest')
  end

  def single_with_guest
    last_name = address_column.gsub(' & Guest', '').split(' ').last
    first_name = names_column.split(' and ').first
    [Guest.new(first_name: first_name, last_name: last_name), Guest.new(first_name: last_name, last_name: 'Guest')]
  end

  def couple_with_different_names?
    address_column.include?(' & M')
  end

  def couple_with_different_names
    names = address_column.match(/M\w+.\W+(\w+) (\w+) & M\w+. (\w+) (\w+)/).captures
    names.each_slice(2).map { |slice| Guest.new(first_name: slice[0], last_name: slice[1]) }
  end

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
