RAILS_ENV = "production"
RUBY = `/usr/local/bin/chruby-exec ruby-$(cat .ruby-version) --  which ruby`.chomp

app_name = 'wedding_website'
rails_root = "/var/www/wedding_website/current"
rails_env = "production"

Eye.application(app_name) do
  env 'RAILS_ENV' => RAILS_ENV

  # unicorn requires to be `ruby` in path (for soft restart)
  env 'PATH' => "#{File.dirname(RUBY)}:#{ENV['PATH']}"
  env 'BUNDLE_GEMFILE' => "#{rails_root}/Gemfile"
  working_dir rails_root

  process('wedding_website') do
    pid_file File.join(rails_root, 'tmp', 'pids', 'unicorn.pid')
    start_command 'bundle exec unicorn -Dc config/unicorn.rb'
    stdall 'log/unicorn.log'
    stop_signals [:TERM, 10.seconds]
    restart_command "kill -USR2 {{PID}}"

    start_timeout 30.seconds
    restart_grace 13.seconds


    check :cpu, every: 30, below: 80, times: 3
    check :memory, every: 30, below: 150.megabytes, times: [3, 5]

    monitor_children do
      stop_command "kill -QUIT {{PID}}"
      check :cpu, every: 30, below: 80, times: 3
      check :memory, every: 30, below: 150.megabytes, times: [3, 5]
    end
  end
end
