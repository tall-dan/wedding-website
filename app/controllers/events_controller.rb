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
    render json: events.map { |e| cal.create(e) }
  end

  def destroy
    cal.delete(params.require(:ids))
  end

  def update
    events = params.require(:events).map do |e|
      Google::Apis::CalendarV3::Event.new(**e.permit!.to_h.deep_symbolize_keys)
    end
    events.map { |e| cal.patch(e) }
  end

  def index
    render json: cal.list_items_between(
      DateTime.parse(params.require(:time_min)), DateTime.parse(params.require(:time_max))
    )
  end

  def cal
    @cal ||= GoogleCalendar.new
  end
end
