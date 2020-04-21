class Api::V1::BaseController < AuthenticatedController
  rescue_from StandardError,                  with: :_render_500
  rescue_from ActiveRecord::RecordInvalid,    with: :_render_422
  rescue_from ActiveRecord::RecordNotFound,   with: :_render_404
  rescue_from ActionController::RoutingError, with: :_render_404

  private

  def routing_error
    raise ActionController::RoutingError, params[:path]
  end

  def _render_500(exception = nil)
    logger.error exception.message
    exception.backtrace.each { |line| logger.error line }
    render json: { error: '500 internal server errror' }, status: :internal_server_error
  end

  def _render_422(exception = nil)
    logger.info exception.message
    logger.info exception.record.inspect
    exception.backtrace.each { |line| logger.info line }
    render json: { messages: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def _render_404(exception = nil)
    logger.info exception.message
    exception.backtrace.each { |line| logger.info line }
    render json: { error: '404 not found' }, status: :not_found
  end
end
