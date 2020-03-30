Rails.application.config.middleware.insert_before(Rack::Runtime, Rack::Rewrite) do
  rewrite /\A(?!\/api\/.*).*\z/, '/'
end
