import React from 'react'

import {useState, useEffect} from 'react'
import PostContainer from './PostContainer'


const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, []);
 
  const mappedPosts = posts?.map(post => {
    return <PostContainer
    key={post.id}
    content={post.content}
    user={post.user.name}
    likes={post.likes}
    comment={post.comment}
    avatar={post.user.avatar}
    slug={post.user.slug}
    />
})

console.log(mappedPosts)
  return (
    <div>Dashboard
      {mappedPosts}
    </div>
  )
}

export default Home