import { Route, Routes, Link } from "react-router-dom";
import LikeButton from "./LikeButton";
import ProfilePage from "./ProfilePage";
import ProfileCard from "./ProfileCard";

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
            <Link to={`/users/${post.slug}`} element={<ProfilePage />}>  {/* changed from post.slug */}
                <h3 className="post-author">{post.user}</h3>
            </Link>
        </div>
        <div className="post-body">
            <p className="post-content">{post.content}</p>
        </div>
        <div className="post-footer">
            <LikeButton className="post-like-button" />
            <div className="post-comments">
                {post.comments.map((comment, index) => (
                    <div key={index} className="post-comment">
                        <p>{comment.content}</p>
                        <p>- {comment.user_id}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
)

}

export default PostContainer