class AddDetailsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :description, :text
    add_column :users, :workplace, :string
    add_column :users, :birth_date, :date
  end
end
