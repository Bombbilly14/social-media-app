import { useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import LikeButton from "./LikeButton";
import ProfilePage from "./ProfilePage";

const PostContainer = (post) => {
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [loggedInUser, setLoggedInUser] = useState("Ryan S");

    const FormattedTime = ({ created_at }) => {
        const formattedTime = moment.utc(created_at).local().format("MMMM Do YYYY, h:mmA");
        return <p>{formattedTime}</p>;
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const response = await fetch(`posts/${post.id}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: loggedInUser,
                content: newComment
            })
        });
    
        if (response.ok) {
            // request was successful, update the UI to show the new comment
            post.comments.push({ name: loggedInUser, content: newComment });
            setNewComment("");
        } else {
            // request failed, show an error message
            console.error('Error saving comment');
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
