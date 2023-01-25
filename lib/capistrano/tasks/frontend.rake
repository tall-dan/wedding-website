# frozen_string_literal: true

namespace :deploy do
  task :frontend do
    set :deployments, ['frontend']
    Rake::Task['deploy'].invoke
  end
end

after 'deploy:updated', :build_frontend do
  next unless fetch(:deployments).include? 'frontend'

  run_locally do
    execute 'cd client && ./metadata_generator.rb'
    execute 'cd client && NODE_ENV=production NPM_CONFIG_PRODUCTION=true npm run build'
    execute 'cd client && ./thumb_nailer.sh -x 250 -y 250'
  end
end

after 'deploy:updated', :copy_frontend do
  next unless fetch(:deployments).include? 'frontend'

  run_locally do
    user = fetch(:user)
    target = fetch(:target)
    execute "cd client && scp -r build/* #{user}@#{target}:/var/www/wedding_website/shared/public"
    execute "scp -r public/* #{user}@#{target}:/var/www/wedding_website/shared/public"
  end
end

after 'deploy:updated', :remove_frontend_build do
  next unless fetch(:deployments).include? 'frontend'

  run_locally do
    execute 'cd client && rm -rf build/'
    puts 'RESET YOUR CACHE'
    execute 'open https://lightsail.aws.amazon.com/ls/webapp/distributions/wedding-website/cache'
  end
end
