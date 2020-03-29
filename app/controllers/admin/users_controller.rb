class Admin::UsersController < AuthenticatedController
  def index
    render json: { users: User.all }
  end
end
