# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::GuestsResolver do
  describe '#resolve' do
    let(:resolver) { Resolvers::GuestsResolver.new(object: nil, context: {}, field: nil) }
    Guest.all.each do |guest|
      it "finds #{guest.display_name}" do
        guests = resolver.resolve(name: guest.display_name)
        expect(guests.length).to be > 0
      end
    end
  end
end
