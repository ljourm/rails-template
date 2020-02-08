class ApplicationController < ActionController::Base
  def append_info_to_payload(payload)
    super
    payload[:host] = request.host
    payload[:hostname] = `hostname`.strip
    payload[:remote_ip] = request.remote_ip
  end
end
