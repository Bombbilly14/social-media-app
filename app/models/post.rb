class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy


  validates :content, presence: true
  validates :content, length: {minimum: 1, maximum: 200}

end
