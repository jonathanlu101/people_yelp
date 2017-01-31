class Review < ApplicationRecord
  belongs_to :user
  has_many :reviews_traits
  has_many :traits, through: :reviews_traits

  def as_json(options={})
    super(except: [:updated_at],
          include: {
            traits: {only: [:name, :positive]}
          }
    )
  end

end
