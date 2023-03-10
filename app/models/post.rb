class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  default_scope { order(created_at: :desc) }
  validates :content, presence: true
  validates :content, length: {minimum: 1, maximum: 200}

end
