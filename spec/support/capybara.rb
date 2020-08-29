RSpec.configure do |config|
  config.before(:each, type: :system) do
    driven_by(:selenium, using: :headless_chrome, screen_size: [1400, 1400]) do |driver_options|
      driver_options.add_argument('--disable-dev-shm-usage')
      driver_options.add_argument('no-sandbox')
    end
  end
end
