class UsersController < ApplicationController
  def index
    render json: User.all.as_json(only:[:id ,:firstname, :lastname])
  end

  def show
    render json: User.find(params[:id]).as_json
  end

  private
  def user_params
    params.require(:post).permit(:email, :firstname, :lastname, :description, :birth_date, :work_place)
  end

end
