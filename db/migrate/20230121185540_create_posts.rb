class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :likes
      t.string :content
      t.datetime :time_posted

      t.timestamps
    end
  end
end
