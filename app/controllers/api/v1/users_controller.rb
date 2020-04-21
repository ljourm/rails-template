class Api::V1::UsersController < Api::V1::BaseController
  before_action :set_user, only: %i[show update destroy]

  def index
    @users = User.eager_load(:user_info).includes(:user_roles)
  end

  def show; end

  def create
    @user = User.new(user_params)
    @user.build_user_info(user_info_params)
    @user.save!
    render :show
  end

  def update
    @user.assign_attributes(user_params)
    @user.user_info.assign_attributes(user_info_params)
    @user.save!
    render :show
  end

  def destroy
    @user.destroy!
  end

  private

  def set_user
    @user = User.friendly.find(params[:id])
  end

  def user_params
    params.require(:user).permit(
      :email,
      :password,
      :password_confirmation,
    )
  end

  def user_info_params
    params.require(:user).permit(
      :name,
    )
  end
end
