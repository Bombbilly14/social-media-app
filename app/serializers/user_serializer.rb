class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :email, :slug, :bio
end
