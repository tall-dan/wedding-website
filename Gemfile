# frozen_string_literal: true

source 'https://rubygems.org'

ruby '2.7.5'

gem 'activerecord-import'
gem 'rails', '~> 6.1.5'

gem 'pg', '~> 1.1'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

gem 'devise'
gem 'rolify'

gem 'airbrake'
gem 'google-api-client'
gem 'google-apis-sheets_v4'
gem 'graphiql-rails', '~> 1.4.11' # TODO: figure out if / how to secure this
gem 'graphql', '1.13.6'
gem 'mail'

# Below explicitly required to pin versions that brakeman likes
gem 'nokogiri', '>= 1.13.6'
gem 'rack', '>= 2.2.3.1'

group :development, :test do
  gem 'bootsnap'
  gem 'listen'
  gem 'pry'
  gem 'pry-byebug'
  gem 'pry-rails'
end

group :test do
  gem 'bundler-audit'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec-rails', '~> 3.8'
  gem 'rubocop', '~> 0.72.0', require: false
end

group :production do # maybe there needs to be a deployment group, in addition to production
  gem 'capistrano', require: false
  gem 'capistrano-chruby', require: false
  gem 'capistrano-rails', '~> 1.4', require: false
  gem 'eye', '~> 0.10.0', require: false
  gem 'unicorn-rails'
end
