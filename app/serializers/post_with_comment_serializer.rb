class PostWithCommentSerializer < ActiveModel::Serializer
  attributes :id, :likes, :content, :created_at
  has_many :comments
end
