# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
require 'faker'

    User.destroy_all
    Post.destroy_all
    Comment.destroy_all
    puts "🌱 Seeding data..."
    

    u1=User.create(name: "Jason T", bio: Faker::Hipster.paragraph(sentence_count: 3), email: "jason@loop.com", password: "password", avatar: Faker::Avatar.image)
    u2=User.create(name: "William G", bio: Faker::Hipster.paragraph(sentence_count: 3), email: "william@loop.com", password: "password", avatar: Faker::Avatar.image)
    u3=User.create(name: "Ryan S", bio: Faker::Hipster.paragraph(sentence_count: 3), email: "ryan@loop.com", password: "password", avatar: Faker::Avatar.image)


    Faker::Config.locale = 'en'

    10.times do
        user = User.create!(
            name: Faker::Name.name, 
            avatar: Faker::Avatar.image, 
            bio: Faker::Hipster.paragraph, 
            password: Faker::Internet.password, 
            email: Faker::Internet.email, 
            slug: Faker::Internet.slug
        )
        8.times do
            post = Post.create!(
                user_id: User.all.sample.id, 
                likes: Faker::Number.between(from: 0, to: 1000), 
                content: Faker::Hipster.sentence, 
                time_posted: Faker::Time.between(from: 20.days.ago, to: Time.now)
            )
            5.times do
                Comment.create!(
                    content: Faker::Hipster.sentence, 
                    likes: Faker::Number.between(from: 0, to: 1000), 
                    post_id: post.id, 
                    user_id: User.all.sample.id
                )
            end
        end
    end
    
    

puts "🌱 Seeding Done!"
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
