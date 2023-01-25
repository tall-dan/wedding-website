# frozen_string_literal: true

require 'google_calendar'

class EventsController < ApplicationController
  before_action :authorize_request

  def authorize_request
    return if request.headers['HTTP_X_CALENDAR_ID'] == Rails.application.credentials.calendar_id

    render(head: :unauthorized) && return
  end

  def create
    events = params.require(:events).map do |e|
      Google::Apis::CalendarV3::Event.new(**e.permit!.to_h.deep_symbolize_keys)
    end
    cal = GoogleCalendar.new
    events.map { |e| cal.create(e) }
    render(head: :created)
  end

  def destroy
    events = cal.list(params.require(:i_cal_uids))
    cal.delete(events.flat_map { |e| e.items.map(&:id) })
  end

  def index
    render json: cal.list(params.require(:i_cal_uids))
  end

  def cal
    @cal ||= GoogleCalendar.new
  end
end
