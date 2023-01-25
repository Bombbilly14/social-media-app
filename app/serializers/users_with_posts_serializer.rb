class UsersWithPostsSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :email, :bio
  has_many :posts
end
