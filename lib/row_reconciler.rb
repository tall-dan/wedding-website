# frozen_string_literal: true

class RowReconciler
  attr_reader :record, :row

  # record will always be present - not true of row
  def initialize(record, row)
    @record = record
    @row = row
  end

  # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
  def record_to_response_row
    ResponseRow.wrap([
                       record.display_name,
                       record.invites.rehearsal_dinner_invites[0]&.status || 'N/A',
                       record.invites.reception_invites[0].status,
                       record.meal_selection&.selection,
                       record.transportations.from_hotel_to_church.exists?,
                       record.transportations.from_church_to_reception.exists?,
                       record.transportations.from_reception_to_hotel.exists?,
                       record.id
                     ])
  end

  def reconcile
    return unless should_update_record?

    log_differences

    record.invites.rehearsal_dinner_invites[0]&.update(status: row.rehearsal_dinner_rsvp)
    record.invites.reception_invites[0].update(status: row.reception_rsvp)
    if record.meal_selection.present?
      record.meal_selection.update(selection: row.meal_selection)
    else
      MealSelection.create!(guest: record, event: Event.reception, selection: row.meal_selection)
    end
    Transportation.options['reception'].each do |option|
      journey = option.downcase.gsub(' ', '_')
      if row.send("bussing_#{journey}") == 'TRUE' && record.invites.reception_invites[0].accepted?
        record.transportations.send(journey).first_or_create!
      else
        record.transportations.send(journey).destroy_all
      end
    end
    record.reload
  end
  # rubocop:enable Metrics/AbcSize, Metrics/MethodLength

  private

  def log_differences
    Rails.logger.warn(<<~MSG
      detected change for #{record.attributes}")
      google sheet row: #{row}
      guest transit: #{record.transportations.map(&:attributes)}
      meal selection: #{record.meal_selection}
      invites: #{record.invites.includes(:event).as_json(include: :event)}
    MSG
                     )
  end

  def row_has_been_updated_manually?
    row.sha != row.calculate_sha
  end

  def record_has_been_updated_since_row_written?
    row.attributes_from_sha != record_to_response_row.intrinsic_values
  end

  def should_update_row?
    return true if row.nil?
    return true unless row_has_been_updated_manually?

    # at this point, we know the row has been updated manually
    # So the only reason to still return true here is if the db record has also been updated
    record_has_been_updated_since_row_written?
  end

  def should_update_record?
    !should_update_row?
  end
end
