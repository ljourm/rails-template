class Api::V1::UsersController < Api::V1::BaseController
  def index
    render json: { users: User.eager_load(:user_info).include(:user_roles).all }
  end
end
