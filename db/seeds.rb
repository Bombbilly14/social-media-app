# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
require 'pry'

    User.destroy_all
    Post.destroy_all
    Comment.destroy_all
    puts "🌱 Seeding data..."
    

    u1=User.create(name: "Jason T", bio: "Bio for Jason", email: "ex1@ex1.com", password: "jason", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u2=User.create(name: "William G", bio: "Bio for William", email: "ex2@ex2.com", password: "william", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u3=User.create(name: "Ryan S", bio: "Bio for Ryan", email: "ex3@ex3.com", password: "ryan", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u4=User.create(name: "Keith M", bio: "Bio for Keith", email: "asd@asd,c", password: "keith", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u5=User.create(name: "Ian H", bio: "Bio for Ian", email: "asdsad.asdsad.com", password: "ian", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u6=User.create(name: 'Bobby F', bio: "Bio for Bobby", email: 'bobby@example.com', password: 'password', avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')

    p1=Post.create(content: "This is post 1", likes: "4", user_id: u1.id)
    p2=Post.create(content: "This is post 2", likes: "6", user_id: u2.id)
    p3=Post.create(content: "This is post 3", likes: "2", user_id: u3.id)
    p4=Post.create(content: "This is post 4", likes: "9", user_id: u4.id)
    p5=Post.create(content: "This is post 5", likes: "13", user_id: u5.id)
    p6=Post.create(content: "This is post 6", likes: "4", user_id: u1.id)
    p7=Post.create(content: "This is post 7", likes: "1", user_id: u2.id)

    c1=Comment.create(content: "This is comment 1", user_id: u1.id, post_id: p1.id)
    c2=Comment.create(content: "This is comment 2", user_id: u2.id, post_id: p2.id)
    c3=Comment.create(content: "This is comment 3", user_id: u3.id, post_id: p2.id)
    c4=Comment.create(content: "This is comment 4", user_id: u4.id, post_id: p3.id)
    c5=Comment.create(content: "This is comment 5", user_id: u5.id, post_id: p4.id)
    c6=Comment.create(content: "This is comment 6", user_id: u1.id, post_id: p5.id)
    c7=Comment.create(content: "This is comment 7", user_id: u2.id, post_id: p7.id)


    puts "🌱 Seeding Done!"
    binding.pry
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
