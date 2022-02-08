# frozen_string_literal: true

source 'https://rubygems.org'

ruby '2.5.3'

gem 'rails', '>= 6.1.3.2'

gem 'pg',   '~> 1.1'
gem 'puma', '~> 4.3'
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
  gem 'bundler-audit'
  gem 'factory_bot_rails'
  gem 'faker'
  gem 'rspec-rails', '~> 3.8'
  gem 'rubocop', '~> 0.72.0', require: false
end

group :production do # maybe there needs to be a deployment group, in addition to production
  gem 'capistrano', require: false
  gem 'capistrano-rails', '~> 1.4', require: false
  gem 'capistrano-chruby', require: false
  gem 'capistrano-secrets-yml', '~> 1.1.0', require: false
  gem 'eye', '~> 0.10.0', require: false
  gem 'unicorn-rails'
end
