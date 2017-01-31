class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.references :owner
      t.references :reviewer
      t.text :description
      t.timestamps
    end
  end
end
