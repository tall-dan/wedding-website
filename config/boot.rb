# frozen_string_literal: true

ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)
require 'bundler/setup' # Set up gems listed in the Gemfile.

env = ENV['RAILS_ENV'] || 'development'

if %w[test development].include?(env)
  require 'bootsnap/setup' # Speed up boot time by caching expensive operations.
end
