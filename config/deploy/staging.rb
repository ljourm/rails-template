set :stage, :staging
set :rails_env, :staging
set :port, '3000'

server "cap",
  user: "root",
  roles: %w{app web db},
  ssh_options: {
    user: "root",
    forward_agent: false,
    auth_methods: %w(password),
    password: "password"
  }
