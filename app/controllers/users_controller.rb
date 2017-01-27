class UsersController < ApplicationController
  def index
    render json: User.all.as_json(only:[:id ,:firstname, :lastname])
  end

  def show
    render json: User.find(params[:id]).as_json(only:[:id, :firstname, :lastname, :image], methods: [:avatar_medium_url])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.permit(:email, :firstname, :lastname, :description, :birth_date, :work_place, :avatar)
  end

end
