# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
require 'pry'

    User.destroy_all
    Post.destroy_all
    Comment.destroy_all
    puts "🌱 Seeding data..."
    

    u1=User.create(name: "Jason T", bio: "Jason is a professional photographer, his Instagram is a mix of both personal and professional work, showcasing his skills in capturing the perfect shot. Follow him for photography inspiration and tips. #photographer #photooftheday", email: "ex1@ex1.com", password: "jason", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u2=User.create(name: "William G", bio: "William is a Youtuber and a comedian, her channel features a mix of vlogs and skits, always keeping her followers laughing. Follow her for daily dose of laughter. #comedy #funny", email: "ex2@ex2.com", password: "william", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u3=User.create(name: "Ryan S", bio: "Ryan is a travel blogger, her blog features a mix of adventure and luxury travel. From backpacking to five-star resorts, she shares her experiences and tips for traveling in style. #travelblogger #luxurytravel", email: "ex3@ex3.com", password: "ryan", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u4=User.create(name: "Keith M", bio: "Keith is a graphic designer, his Instagram is a mix of both personal and professional work, showcasing his skills in design and illustration. Follow him for design inspiration and tips. #graphicdesign #designinspo", email: "asd@asd,c", password: "keith", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u5=User.create(name: "Ian H", bio: "Ian is an artist, his Instagram showcases his unique artworks, from painting to sculpture, he is a master of all mediums. Follow him for art inspiration and updates on his latest exhibitions. #artist #art", email: "asdsad.asdsad.com", password: "ian", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u6=User.create(name: 'Bobby F', bio: "Bobby is an entrepreneur and a business coach, his Instagram is a mix of motivational quotes, business tips, and a glimpse into his business journey. Follow him for business inspiration and advice. #entrepreneur #businesscoach", email: 'bobby@example.com', password: 'bobby', avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u7=User.create(name: "Mary Z", bio: "Meet Jane, a fashion blogger and influencer from New York City. Follow her for daily style inspiration and a glimpse into her jet-setting life. #fashionista #nyc", email: "ex7@ex7.com", password: "mary", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u8=User.create(name: "Tom Y", bio: "Tom is a foodie and chef, sharing his culinary creations and food adventures on his Instagram account. From fine dining to street food, he has a passion for it all. #foodie #cheflife", email: "ex8@ex8.com", password: "tom", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u9=User.create(name: "Samantha W", bio: "Samantha is a fitness enthusiast and personal trainer. Follow her for workout tips, healthy recipes, and inspiration to achieve your fitness goals. #fitfam #personaltrainer" , email: "ex9@ex9.com", password: "samantha", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u10=User.create(name: "Mark M", bio: "Mark is a travel vlogger and photographer. Join him as he explores the world, capturing stunning landscapes and unique cultures. #travel #wanderlust", email: "asde@aesd,c", password: "mark", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u11=User.create(name: "Emily H", bio: "Emily is a beauty and makeup artist, sharing her favorite products and tutorials on her YouTube channel. From natural to bold looks, she has something for everyone. #beauty #makeupartist", email: "asdsa2d.asds2d.com", password: "emily", avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u12=User.create(name: 'Jacob', bio: "Jacob is a tech expert and YouTuber, sharing his thoughts on the latest gadgets and providing tips and tricks to help you get the most out of your devices. #tech #gadget", email: 'aldknfa@example.com', password: 'jacob', avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')
    u13=User.create(name: 'Lauren E', bio: "Lauren is a home and DIY blogger, sharing her interior design ideas, DIY projects, and home renovation journey. Follow her for inspiration and ideas for your own home. #homedecor #DIY", email: 'bpjbafp@example.com', password: 'lauren', avatar: 'https://cdn.vectorstock.com/i/1000x1000/53/42/user-member-avatar-face-profile-icon-vector-22965342.webp')


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
