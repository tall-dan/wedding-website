# frozen_string_literal: true

module GuestReader
  attr_reader :row
  # consumers must implement #address_column, #names_column, #guest_count, #rehearsal_dinner_column

  def self.reader_with_source(file_name = nil)
    # if given csv, read it and give back the appropriate reader
    # if not, use google and give back the appropriate reader
    if file_name
      require 'csv'
      require 'sheet_readers/csv_row_guest_reader'
      [CsvRowGuestReader, CSV.read(args[:file_path], headers: true)]
    else
      require 'google_sheet_reader'
      require 'sheet_readers/array_guest_reader'
      [ArrayGuestReader, GoogleSheetReader.new('Wedding Invites - June 25 2022').read('A2:L140')]
    end
  end

  def initialize(row)
    @row = row
  end

  def extract
    tweak_edge_cases(guests)
  end

  def invited_to_rehearsal_dinner?
    rehearsal_dinner_column.to_s.downcase == 'y'
  end

  private

  # rubocop:disable Metrics/CyclomaticComplexity, Metrics/PerceivedComplexity
  def guests
    if invalid_row? then []
    elsif family? then family
    elsif single_guest? then single_guest
    elsif married_couple? then married_couple
    elsif single_with_guest? then single_with_guest
    elsif couple_with_different_names? then couple_with_different_names
    end
  end
  # rubocop:enable Metrics/CyclomaticComplexity, Metrics/PerceivedComplexity

  def invalid_row?
    address_column.blank?
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
    address_column.downcase.include?('family')
  end

  # rubocop:disable Metrics/AbcSize
  def family
    last_name = address_column.match(/(.*) & Family/).try('[]', 1)&.split(' ')&.last
    last_name ||= address_column.match(/The (.*) Family/)[1]
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
    [Guest.new(first_name: first_name, last_name: last_name), Guest.new(first_name: last_name, last_name: 'guest')]
  end

  def couple_with_different_names?
    address_column.include?(' & M')
  end

  # rubocop:disable Metrics/MethodLength, Metrics/CyclomaticComplexity, Metrics/PerceivedComplexity
  def tweak_edge_cases(guests)
    guests.each do |guest|
      if guest.last_name == 'morilla'
        guest.assign_attributes(last_name: 'diaz morilla')
      elsif guest.first_name == 'ms. joan mclaughlin'
        guest.assign_attributes(first_name: 'joan', last_name: 'mclaughlin')
      elsif guest.last_name == 'mcweiner'
        guest.assign_attributes(last_name: 'weiner')
        guest.assign_attributes(last_name: 'guest', first_name: 'weiner') if guest.first_name == 'guest'
      elsif guest.first_name == 'jake and dave minker'
        guest.assign_attributes(last_name: 'minker', first_name: 'dave')
      end
    end
    guests.append(Guest.new(first_name: 'jake', last_name: 'bellacini')) if guests.first&.last_name == 'bellacini'
    guests
  end
  # rubocop:enable Metrics/MethodLength, Metrics/CyclomaticComplexity, Metrics/PerceivedComplexity

  def couple_with_different_names
    names = address_column.match(/M\w+.\W+(\w+) (\w+) & M\w+. (\w+) (\w+)/).captures
    names.each_slice(2).map { |slice| Guest.new(first_name: slice[0], last_name: slice[1]) }
  end
end
