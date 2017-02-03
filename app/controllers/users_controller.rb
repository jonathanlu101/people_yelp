class UsersController < ApplicationController

  before_action :authenticate_user!

  def index
    render json: User.all.as_json(only:[:id ,:firstname, :lastname])
  end

  def show
    user = User.find(params[:id])
    render json: user.as_json(methods: [:avatar_medium_url])
      .merge(isMyProfile: isMyProfile?(user), reviewable: reviewable?(user))
  end

  def update
    if current_user.id.to_s != params[:id]
      return render json: {}, status: :unauthorized
    end
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.permit(:email, :firstname, :lastname, :description, :birth_date, :workplace, :avatar)
  end

  def isMyProfile?(user)
    if user.id == current_user.id
      return true
    else
      return false
    end
  end

  def reviewable?(user)
    if isMyProfile?(user)
      return false
    elsif user.reviewExists?(current_user.id)
      return false
    else
      return true
    end
  end

end
