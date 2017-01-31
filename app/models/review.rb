class Review < ApplicationRecord
  belongs_to :owner, class_name: 'User'
  belongs_to :reviewer, class_name: 'User'
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
