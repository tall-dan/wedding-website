# frozen_string_literal: true

Rails.application.routes.draw do
  scope 'api' do
    post '/graphql', to: 'graphql#execute'
    get '/reconcile_responses', to: 'application#reconcile_responses'
    get '/pulse_check', to: 'application#pulse_check'
    get '/airbrake_config', to: 'application#airbrake_config'
    devise_for :users

    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/api/graphql'

    resources :events, only: %i[create index] do
      collection do
        delete '/' => :destroy
        put '/' => :update
      end
    end
  end
end
