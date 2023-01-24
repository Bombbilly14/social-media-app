import { Route, Routes, Link } from "react-router-dom";
import LikeButton from "./LikeButton";

const PostContainer = (post) => {



return (
    <div className = "card">
        <div className = "post-avatar">
            <img src = {post.user.avatar} alt = ""/>
        </div>
        <Link to = {`/${post.user.slugify}`}>
            <h3 className = "post-author">{post.user}</h3>
        </Link>
        <div className = "post-content">{post.content}</div>
        <LikeButton className = "post-likes"/>
        <div className = "post-comments"></div>
    </div>
)
}

export default PostContainer