class Trait < ApplicationRecord
  has_many :reviews_traits
  has_many :reviews, through: :reviews
end
