import { useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import LikeButton from "./LikeButton";
import ProfilePage from "./ProfilePage";

const PostContainer = (post) => {
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [loggedInUser, setLoggedInUser] = useState("user"); // Add this line to set the logged in user's name

    const FormattedTime = ({ created_at }) => {
        const formattedTime = moment.utc(created_at).local().format("MMMM Do YYYY, h:mmA");
        return <p>{formattedTime}</p>;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        post.comments.push({ name: loggedInUser, content: newComment });
        setNewComment("");
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
                <button className="see-thread-button button-react" onClick={() => setShowComments(!showComments)}>
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
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Add a comment..."
                                value={newComment}
                                onChange={(event) => setNewComment(event.target.value)}
                            />
                            <button type="submit">Post</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostContainer;
