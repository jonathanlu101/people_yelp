class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action :set_csrf_cookie_for_ng

  def angular
    render 'layouts/application'
  end

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  private
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:firstname,:lastname,:email,:password])
  end

  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end

end
