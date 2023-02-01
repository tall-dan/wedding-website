# frozen_string_literal: true

require 'google/apis/calendar_v3'
require 'google_auth'

class GoogleCalendar
  include GoogleAuth
  attr_reader :calendar_id

  def initialize
    @calendar_id = calendar_id
    @g_service = Google::Apis::CalendarV3::CalendarService.new
    @application_name = 'Calendar Mirror'
    @scope = Google::Apis::CalendarV3::AUTH_CALENDAR
    @calendar_id = Rails.application.credentials.calendar_id
  end

  def doc
    @doc ||= service.get_document(calendar_id)
  end

  def create(event)
    service.insert_event(calendar_id, event)
  end

  def patch(event)
    service.patch_event(calendar_id, event.id, event)
  end

  def list(i_cal_uids)
    # This should really be moved to batch
    i_cal_uids.map { |id| get(id) }
  end

  def list_items_between(time_min, time_max)
    service.list_events(calendar_id, time_min: time_min, time_max: time_max)
  end

  def get(i_cal_uid)
    service.list_events(calendar_id, i_cal_uid: i_cal_uid)
  end

  def delete(event_ids)
    # This should really be moved to batch
    event_ids.map { |event_id| service.delete_event(calendar_id, event_id) }
  end
end
