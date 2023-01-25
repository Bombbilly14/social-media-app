# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
require 'faker'

    User.destroy_all
    Post.destroy_all
    Comment.destroy_all
    puts "🌱 Seeding data..."
    

    u1=User.create(name: "Jason T", bio: "Bio for Jason", email: "ex1@ex1.com", password: "password", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u2=User.create(name: "William G", bio: "Bio for William", email: "ex2@ex2.com", password: "password", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u3=User.create(name: "Ryan S", bio: "Bio for Ryan", email: "ex3@ex3.com", password: "password", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')

    p1=Post.create(content: "This is post 1", likes: "4", user_id: u1.id)
    p2=Post.create(content: "This is post 2", likes: "6", user_id: u2.id)
    p3=Post.create(content: "This is post 3", likes: "2", user_id: u3.id)
    p4=Post.create(content: "This is post 4", likes: "4", user_id: u1.id)
    p5=Post.create(content: "This is post 5", likes: "1", user_id: u2.id)

    c1=Comment.create(content: "This is comment 1", user_id: u1.id, post_id: p1.id)
    c2=Comment.create(content: "This is comment 2", user_id: u2.id, post_id: p2.id)
    c3=Comment.create(content: "This is comment 3", user_id: u3.id, post_id: p2.id)
    c6=Comment.create(content: "This is comment 4", user_id: u1.id, post_id: p4.id)
    c7=Comment.create(content: "This is comment 5", user_id: u2.id, post_id: p5.id)

    50.times do
        user = User.create!(name: Faker::Name.name, avatar: Faker::Avatar.image, bio: Faker::Lorem.paragraph, password: Faker::Internet.password, email: Faker::Internet.email, slug: Faker::Internet.slug)
        5.times do
          post = Post.create!(user_id: user.id, likes: Faker::Number.between(from: 0, to: 1000), content: Faker::Lorem.sentence)
          3.times do
            Comment.create!(content: Faker::Lorem.sentence, likes: Faker::Number.between(from: 0, to: 1000), post_id: post.id, user_id: user.id)
          end
        end
      end

puts "🌱 Seeding Done!"
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
