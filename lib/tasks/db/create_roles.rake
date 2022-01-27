# frozen_string_literal: true

namespace :db do
  task create_role: :environment do
    user = ActiveRecord::Base.connection_db_config.configuration_hash[:username]
    sh "createuser --createdb --login #{user}|| echo role #{user} already exists."
  end
end

Rake::Task['db:create'].enhance ['db:create_role']
