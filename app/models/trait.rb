class Trait < ApplicationRecord
  has_many :reviews_traits
  has_many :reviews, through: :reviews_traits
  has_many :user_trait
  has_many :user, through: :user_trait
end
