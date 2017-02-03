class TraitsController < ApplicationController

  def index
    render json: Trait.all.as_json()
  end

end
