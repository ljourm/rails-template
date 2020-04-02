Rails.application.config.middleware.insert_before(Rack::Runtime, Rack::Rewrite) do
  rewrite '/login', '/login'
  rewrite /\A(?!\/api\/.*)(?!\/acadmin\/.*).*\z/, '/'
end
