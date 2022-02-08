# frozen_string_literal: true

namespace :deploy do
  task :frontend do
    ENV['deployments'] = 'frontend'
    Rake::Task['deploy'].invoke
  end
end

after 'deploy:updated', :build_frontend do
  next unless ENV['deployments'].split(',').include? 'frontend'

  run_locally do
    execute 'cd client && NODE_ENV=production NPM_CONFIG_PRODUCTION=true npm run build'
  end
end

after 'deploy:updated', :copy_frontend do
  next unless ENV['deployments'].split(',').include? 'frontend'

  run_locally do
    execute "sed  -i '' '/eileen-and-dans-wedding/{N;N;d;}' ~/.aws/credentials"
    execute 'cat .credentials.aws >> ~/.aws/credentials'
    execute 'aws s3 rm s3://mcschepers-vow-renewal --recursive --profile eileen-and-dans-wedding'
    execute 'cd client && aws s3 mv build/ s3://mcschepers-vow-renewal/ --recursive  --profile eileen-and-dans-wedding'

    execute <<~STR.gsub("\n", ' ')
      aws cloudfront create-invalidation --distribution-id $(cat .distribution.aws) --paths "/index.html"
      --profile eileen-and-dans-wedding | echo
    STR
  end
end

after 'deploy:updated', :remove_frontend_build do
  next unless ENV['deployments'].split(',').include? 'frontend'

  run_locally do
    execute 'cd client && rm -rf build/'
  end
end
