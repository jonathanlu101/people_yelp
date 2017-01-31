class CreateUserTraits < ActiveRecord::Migration[5.0]
  def change
    create_table :user_traits do |t|
      t.integer :count
      t.belongs_to :user, index: true
      t.belongs_to :trait, index: true
    end
  end
end
