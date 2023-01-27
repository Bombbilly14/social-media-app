class PostSerializer < ActiveModel::Serializer
  attributes :id, :likes, :content, :time_posted
  has_one :user
  has_many :comments

end
