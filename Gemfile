# frozen_string_literal: true

source 'https://rubygems.org'

ruby '2.5.3'

gem 'rails', '~> 6.0.0.rc1'

gem 'pg',   '~> 0.21.0'
gem 'puma', '~> 3.11'
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

gem 'devise'
gem 'rolify'

gem 'graphiql-rails', '~> 1.4.11' # TODO: figure out if / how to secure this
gem 'graphql'
gem 'mail'

group :development, :test do
  gem 'bootsnap'
  gem 'listen'
  gem 'pry'
  gem 'pry-byebug'
end

group :test do
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec-rails', '~> 3.8'
  gem 'rubocop', '~> 0.72.0', require: false
end

group :production do
  gem 'capistrano'
  gem 'capistrano-rails', '~> 1.4', require: false
  gem 'eye'
  gem 'unicorn-rails'
end
