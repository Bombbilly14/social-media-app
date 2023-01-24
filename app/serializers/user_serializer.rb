class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :password_digest, :email, :slug
end
