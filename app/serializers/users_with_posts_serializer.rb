class UsersWithPostsSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :password_digest, :email
  has_many :posts
end
