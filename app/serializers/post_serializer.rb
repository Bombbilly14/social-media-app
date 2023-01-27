class PostSerializer < ActiveModel::Serializer
  attributes :id, :likes, :content, :created_at
  has_one :user
  has_many :comments

end
