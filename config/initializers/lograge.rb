Rails.application.configure do
  config.lograge.logger = ActiveSupport::Logger.new "#{Rails.root}/log/lograge_#{Rails.env}.log"
  config.lograge.keep_original_rails_log = true
  config.lograge.formatter = Lograge::Formatters::Json.new

  config.lograge.custom_payload do |controller|
    {
      request_uuid: controller.request.uuid,
      original_url: controller.request.original_url,
      remote_ip: controller.request.remote_ip,
    }
  end

  config.lograge.custom_options = lambda do |event|
    exceptions = %w(controller action format authenticity_token)
    data = {
      log_level: 'INFO',
      event_time: Time.now.iso8601,
      hostname: `hostname`.strip,
      user_id: event.payload[:user_id],
      params: event.payload[:params].except(*exceptions),
    }
    if event.payload[:exception]
      data[:log_level] = 'FATAL'
      data[:exception] = event.payload[:exception]
      data[:exception_backtrace] = event.payload[:exception_object].backtrace[0..9]
    end
    data
  end
end
