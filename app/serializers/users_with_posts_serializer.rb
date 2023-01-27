class UsersWithPostsSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :email, :bio, :created_at
  has_many :posts
end
