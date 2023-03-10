class CreateFollows < ActiveRecord::Migration[6.1]
  def change
    create_table :follows do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.integer :follower_id

      t.timestamps
    end
  end
end
