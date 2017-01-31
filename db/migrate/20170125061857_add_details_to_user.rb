class AddDetailsToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :description, :string, default: ""
    add_column :users, :workplace, :string, default: ""
    add_column :users, :birth_date, :date
  end
end
