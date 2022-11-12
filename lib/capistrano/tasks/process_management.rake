# frozen_string_literal: true

before 'deploy:migrate', :copy_config do
  on roles(:app) do
    next unless fetch(:deployments).include? 'backend'
    run_locally do
      execute "scp -r config/* #{fetch(:user)}@#{fetch(:target)}:/var/www/wedding_website/shared/config"
    end
  end
end

after 'deploy:finished', :restart_eye do
  on roles(:app) do
    next unless fetch(:deployments).include? 'backend'

    release_path = fetch(:release_path)
    execute "cd #{release_path} && mkdir -p tmp/pids && chmod 777 tmp/pids"
    execute "cd #{release_path} && RAILS_ENV=production bin/bundle exec eye load config/unicorn.eye"
    execute "cd #{release_path} && RAILS_ENV=production bin/bundle exec eye stop wedding_website"
    execute "cd #{release_path} && RAILS_ENV=production bin/bundle exec eye start wedding_website"
  end
end
