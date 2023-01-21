class User < ApplicationRecord
    has_many :posts
    has_many :comments
    has_many :followers, through: :follows 
    has_many :following, through: :follows, source: :follower
end
