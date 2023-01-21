class PostSerializer < ActiveModel::Serializer
  attributes :id, :likes, :content
  has_one :user
  has_many :comments

end
