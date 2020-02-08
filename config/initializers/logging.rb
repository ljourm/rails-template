Rails.application.configure do
  config.lograge.logger = ActiveSupport::Logger.new "#{Rails.root}/log/lograge_#{Rails.env}.log"
  config.lograge.keep_original_rails_log = true
  config.lograge.formatter = Lograge::Formatters::Json.new

  config.lograge.custom_options = lambda do |event|
    exceptions = %w(controller action format authenticity_token)
    data = {
      level: 'INFO',
      host: event.payload[:host],
      hostname: event.payload[:hostname],
      remote_ip: event.payload[:remote_ip],
      time: Time.now.iso8601,
      params: event.payload[:params].except(*exceptions)
    }
    if event.payload[:exception]
      data[:level] = 'FATAL'
      data[:exception] = event.payload[:exception]
      data[:exception_backtrace] = event.payload[:exception_object].backtrace[0..6]
    end
    data
  end
end
