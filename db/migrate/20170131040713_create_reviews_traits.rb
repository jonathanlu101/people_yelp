class CreateReviewsTraits < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews_traits do |t|
      t.belongs_to :review, index: true
      t.belongs_to :trait, index: true
    end
  end
end
