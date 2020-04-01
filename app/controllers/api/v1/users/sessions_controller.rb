class Api::V1::Users::SessionsController < Api::V1::BaseController
  def destroy
    sign_out current_user
    render json: {}
  end
end
