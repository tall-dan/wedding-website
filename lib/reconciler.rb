# frozen_string_literal: true

require 'google_sheet_reader'
require 'row_reconciler'
require 'response_row'

class Reconciler
  attr_reader :rows, :reader

  def initialize
    name = Rails.env.development? ? 'Responses - Dev' : 'Responses'
    @reader = GoogleSheetReader.new(name)
    rows = reader.read("A1:J#{Guest.count + 1}")
    headers = rows[0]
    ResponseRow.init(headers)
    @rows = rows[1..-1].map { |row| ResponseRow.wrap(row) }
  end

  # rubocop:disable Metrics/AbcSize
  def reconcile
    # People are done using the website to respond at this point,
    # and testing with seat reconcilation in dev makes me think this is going to write bad data
    return if Rails.env.prod?

    guest_lookup = rows.index_by(&:id)
    Guest.includes(:invites, :meal_selection, :transportations).all.each do |guest|
      existing_row = guest_lookup[guest.id.to_s]
      row_reconciler = RowReconciler.new(guest, existing_row)
      row_reconciler.reconcile
      guest_lookup[guest.id.to_s] = row_reconciler.record_to_response_row
    end
    reader.write(guest_lookup.values.map(&:to_a), 'A2')
  end
  # rubocop:enable Metrics/AbcSize
end
