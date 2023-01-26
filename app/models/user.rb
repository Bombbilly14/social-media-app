class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :comments
    has_many :followers, through: :follows
    has_many :following, through: :follows, source: :follower

    has_secure_password

    validates_presence_of :name

    before_create :slugify

    def slugify
        self.slug = name.parameterize
    end
end
