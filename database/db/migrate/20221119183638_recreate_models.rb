class RecreateModels < ActiveRecord::Migration[6.1]
  def change
    create_table :models do |t|
      t.string :name
      t.string :img
      t.integer :mpg
      t.string :drivetrain
      t.integer :horsepower
      t.integer :seats
      t.string :body
      t.integer :doors
      t.integer :make_id
    end
  end
end
