import { Route, Routes, Link } from "react-router-dom";
import LikeButton from "./LikeButton";

const PostContainer = (post) => {

    const styles = {
        postAvatar: {
          height: '50px',
          width: '50px',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '100%'
        }
      };

return (
    <div className="card post">
        <div className="post-header">
            <img src={post.avatar} alt="" className="post-avatar" />
            <Link to={`/users/${post.slug}`}>
                <h3 className="post-author">{post.user}</h3>
            </Link>
        </div>
        <div className="post-body">
            <p className="post-content">{post.content}</p>
        </div>
        <div className="post-footer">
            <LikeButton className="post-like-button" />
            {/* <div className="post-comment-count">{post.comment.length} Comments</div> */}
        </div>
    </div>
)
}

export default PostContainer