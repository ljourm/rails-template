class Admin::HomesController < AuthenticatedController
  def index
    render layout: false
  end
end
