import { useState } from "react";

const PostContainer = (post) => {



return (
    <div className = "card">
        <div className = "post-avatar">{post.user}
            <img src = {post.user.avatar} alt = ""/>
            <a href = {`/users/${post.slug}`}></a>
        </div>
        <div className = "post-author">
            
        </div>
        <div className = "post-content">{post.content}</div>
        <div className = "post-likes"></div>
        <div className = "post-comments"></div>
    </div>
)
}

export default PostContainer