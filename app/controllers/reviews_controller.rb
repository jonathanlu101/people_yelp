class ReviewsController < ApplicationController
  def index
    render json: Review.all.as_json()
  end

  def create
    review = Review.create(params.permit(:description, :user_id))
    params[:trait_ids].each do |trait_id|
      ReviewsTrait.create(review_id: review.id, trait_id: trait_id)
    end
    render json: review.as_json(except: :updated_at, include: {traits:{only: [:name, :positive]}})
  end

end
