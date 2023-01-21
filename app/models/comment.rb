class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  validates :content, presence: true
  validates :content, length: {minimum: 1, maximum: 200}
end
