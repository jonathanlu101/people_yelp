json.id @user.id
json.created_at @user.created_at
json.firstname @user.firstname
json.lastname @user.lastname
json.workplace @user.workplace
json.birth_date @user.birth_date
json.description @user.description
json.avatar_medium_url @user.avatar_medium_url
json.isMyProfile isMyProfile?(@user)
json.reviewable reviewable?(@user)
if params[:include] && params[:include].include?("reviews")
  json.reviews @user.reviews do |review|
    json.description review.description
    json.created_at review.created_at
    json.reviewer do
      json.firstname review.reviewer.firstname
      json.lastname review.reviewer.lastname
      json.avatar_icon_url review.reviewer.avatar_icon_url
    end
    json.traits do
      json.positive review.traits.select{|trait| trait.positive} do |trait|
        json.name trait.name
      end
      json.negative review.traits.select{|trait| !trait.positive} do |trait|
        json.name trait.name
      end
    end
  end
end
json.userTraits do
  json.positive @user.user_traits.select{|user_trait| user_trait.trait.positive} do |user_trait|
    json.name user_trait.trait.name
    json.count user_trait.count
  end
  json.negative @user.user_traits.select{|user_trait| !user_trait.trait.positive} do |user_trait|
    json.name user_trait.trait.name
    json.count user_trait.count
  end
end
