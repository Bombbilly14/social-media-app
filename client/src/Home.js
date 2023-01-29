import React from 'react'

import {useState, useEffect} from 'react'
import PostContainer from './PostContainer'
import './styles/Home.css'

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
    comments={post.comments.map(comment => comment)}
    avatar={post.user.avatar}
    slug={post.user.slug}
    created_at={post.created_at}
    />
})

  return (
    <div className='whole-dashboard'>Dashboard
      {mappedPosts}
    </div>
  )
}

export default Home