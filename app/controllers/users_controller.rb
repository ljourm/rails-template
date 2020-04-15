class UsersController < AuthenticatedController
  def index
    @users = User.all
                 .eager_load(:user_info)
                 .includes(:user_roles)
  end
end
