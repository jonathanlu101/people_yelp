class ReviewsTrait < ApplicationRecord
  belongs_to :review
  belongs_to :trait
end
