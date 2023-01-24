import { Route, Routes, Link } from "react-router-dom";
const PostContainer = (post) => {



return (
    <div className = "card">
        <div className = "post-avatar">
            <img src = {post.user.avatar} alt = ""/>
        </div>
        <Link to = {`/users/${post.user.slugify}`}>
            <h3 className = "post-author">{post.user}</h3>
        </Link>
        <div className = "post-content">{post.content}</div>
        <div className = "post-likes"></div>
        <div className = "post-comments"></div>
    </div>
)
}

export default PostContainer