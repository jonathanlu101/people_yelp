class ChangeDescriptionTypeInUser < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :description, :text
  end
end
