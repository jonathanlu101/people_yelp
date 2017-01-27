class ChangeDescriptionWorkPlaceTypeInUser < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :description, :text
    change_column :users, :workplace, :text
  end
end
