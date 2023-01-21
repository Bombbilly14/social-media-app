class PostWithCommentSerializer < ActiveModel::Serializer
  attributes :id, :likes, :content
  has_many :comments
end
