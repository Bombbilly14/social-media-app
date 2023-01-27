class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :user_id, :name
  has_one :post
  has_one :user

  def name
    object.user.name
  end
end
