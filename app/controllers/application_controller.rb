class ApplicationController < ActionController::Base
  def append_info_to_payload(payload)
    super
    return if @rescued_exception.blank?

    payload[:exception_object] ||= @rescued_exception
    payload[:exception] ||= [@rescued_exception.class, @rescued_exception.message]
  end
end
