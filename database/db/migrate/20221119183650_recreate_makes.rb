class RecreateMakes < ActiveRecord::Migration[6.1]
  def change
    create_table :makes do |t|
      t.string :name
      t.integer :year_founded
      t.string :logo_url
      t.string :hq
    end
  end
end
