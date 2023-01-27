import { useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import LikeButton from "./LikeButton";
import ProfilePage from "./ProfilePage";

const PostContainer = (post) => {
    const [showComments, setShowComments] = useState(false);


    const FormattedTime = ({ created_at }) => {
        const formattedTime = moment.utc(created_at).local().format("MMMM Do YYYY, h:mmA");
        return <p>{formattedTime}</p>;
      };
      
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
                <Link to={`/users/${post.slug}`} element={<ProfilePage />}>
                    <h3 className="post-author">{post.user}</h3>
                </Link>
            </div>
            <div className="post-body">
                <p className="post-content">{post.content}</p>
               
                <FormattedTime created_at={post.created_at} />
            </div>
            <div className="post-footer">
                <LikeButton className="post-like-button" />
                <button className="see-thread-button button-react"  onClick={() => setShowComments(!showComments)}>
                    {showComments ? 'Hide Thread' : 'See Thread'}
                </button>
                {showComments && (
                    <div className="post-comments">
                        {post.comments.map((comment, index) => (
                            <div key={index} className="post-comment">
                                <p>{comment.content}</p>
                                <p>- {comment.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostContainer
