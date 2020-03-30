Rails.application.config.middleware.insert_before(Rack::Runtime, Rack::Rewrite) do
  rewrite '/users/sign_in', '/users/sign_in'
  rewrite /\A(?!\/api\/.*).*\z/, '/'
end
