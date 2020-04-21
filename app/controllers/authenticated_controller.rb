class AuthenticatedController < ApplicationController
  before_action :authenticate_user!

  def append_info_to_payload(payload)
    super
    payload[:user_id] = current_user&.id
  end
end
