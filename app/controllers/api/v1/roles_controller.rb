class Api::V1::RolesController < Api::V1::BaseController
  before_action :set_user, only: %i[show update destroy]

  def index; end
end
