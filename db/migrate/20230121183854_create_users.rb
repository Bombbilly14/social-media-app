class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :avatar
      t.text :bio
      t.string :password_digest
      t.string :email
      t.string :slug

      t.timestamps
    end
  end
end
