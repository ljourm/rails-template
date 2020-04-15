class Api::V1::UsersController < Api::V1::BaseController
  def index
    @users = User.eager_load(:user_info).includes(:user_roles)
  end
end
