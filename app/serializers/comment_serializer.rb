class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :user_id
  has_one :post
  has_one :user
end
