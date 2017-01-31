class ReviewsController < ApplicationController

  before_action :authenticate_user!

  def index
    render json: Review.all.as_json()
  end

  def create

    owner_id = params[:user_id]
    reviewer_id = current_user.id.to_s

    if reviewer_id == owner_id
      return render json: {}, status: :conflict
    end

    if reviewExists(owner_id, 2)
      return render json: {}, status: :conflict
    end

    ActiveRecord::Base.transaction do
      review = Review.create(params.permit(:description)
        .merge(owner_id: owner_id, reviewer_id: reviewer_id))

      params[:trait_ids].each do |trait_id|
        ReviewsTrait.create(review_id: review.id, trait_id: trait_id)
        addToUserTraits(owner_id, trait_id)
      end

      render json: review.as_json
    end
  end

  private
  def addToUserTraits(user_id,trait_id)
    user_trait = UserTrait.find_by(user_id: user_id, trait_id: trait_id)
    if user_trait
      user_trait.count += 1
      user_trait.save
    else
      UserTrait.create(user_id: user_id, trait_id: trait_id, count: 1)
    end
  end

  def reviewExists(owner_id,reviewer_id)
    if Review.find_by(owner_id: owner_id, reviewer_id: reviewer_id)
      return true
    else
      return false
    end
  end

end
