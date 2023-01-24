class UsersWithPostsSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :password_digest, :email
  has_many :posts
  has_many :comments
end
