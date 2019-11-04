after 'deploy:updated', :build_frontend do
  on roles(:app) do
    release_path = fetch(:release_path)
    execute "cd #{release_path}/client && NODE_ENV=production NPM_CONFIG_PRODUCTION=true npm run build"
    execute "cd #{release_path} && cp -a client/build/. public/"
  end
end
