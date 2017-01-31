class TraitsController < ApplicationController

  #before_action :authenticate_user!, only: [:index, :show, :update]

  def index
    render json: Trait.all.as_json()
  end

end
