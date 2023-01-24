class UsersWithPostsSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :email
  has_many :posts
  has_many :comments
end
