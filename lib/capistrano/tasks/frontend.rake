# frozen_string_literal: true

after 'deploy:updated', :build_frontend do
  run_locally do
    execute 'cd client && NODE_ENV=production NPM_CONFIG_PRODUCTION=true npm run build'
  end
end

after 'deploy:updated', :copy_frontend do
  run_locally do
    execute 'aws s3 rm s3://eileen-and-dans-wedding --recursive --profile eileen-and-dans-wedding'
    execute 'cd client && aws s3 mv build/ s3://eileen-and-dans-wedding/ --recursive  --profile eileen-and-dans-wedding'
  end

  # Temp while I figure out how to connect s3 to cloudfront & godaddy
  on roles(:app) do
    upload! 'client/build/', "#{release_path}/public/", recursive: true
    execute "cd #{release_path}/public && cp -R build/* . && rm -rf build/"
  end
end

after 'deploy:updated', :remove_frontend_build do
  run_locally do
    execute 'cd client && rm -rf build/'
  end
end
