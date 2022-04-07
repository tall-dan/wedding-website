# frozen_string_literal: true

namespace :deploy do
  task :backend do
    set :deployments, ['backend']
    Rake::Task['deploy'].invoke
  end
end
