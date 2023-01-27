# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
require 'faker'

    User.destroy_all
    Post.destroy_all
    Comment.destroy_all
    puts "🌱 Seeding data..."
    

    u1=User.create(name: "Jason T", bio: "Bio for Jason", email: "ex1@ex1.com", password: "password", avatar: Faker::Avatar.image)
    u2=User.create(name: "William G", bio: "Bio for William", email: "ex2@ex2.com", password: "password", avatar: Faker::Avatar.image)
    u3=User.create(name: "Ryan S", bio: "Bio for Ryan", email: "ex3@ex3.com", password: "password", avatar: Faker::Avatar.image)


    10.times do
        user = User.create!(name: Faker::Name.name, avatar: Faker::Avatar.image, bio: Faker::Lorem.paragraph, password: Faker::Internet.password, email: Faker::Internet.email, slug: Faker::Internet.slug)
        8.times do
            post = Post.create!(user_id: User.all.sample.id, likes: Faker::Number.between(from: 0, to: 1000), content: Faker::Lorem.sentence, time_posted: Faker::Time.between(from: 20.days.ago, to: Time.now))

        5.times do
        Comment.create!(content: Faker::Lorem.sentence, likes: Faker::Number.between(from: 0, to: 1000), post_id: post.id, user_id: User.all.sample.id)
        end
        end
        end

puts "🌱 Seeding Done!"
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
