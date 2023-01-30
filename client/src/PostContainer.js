import { useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import LikeButton from "./LikeButton";
import ProfilePage from "./ProfilePage";

const PostContainer = (post) => {
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState("");

    const FormattedTime = ({ created_at }) => {
        const formattedTime = moment.utc(created_at).local().format("MMMM Do YYYY, h:mmA");
        return <p>{formattedTime}</p>;
    };


    const handleChange = e => {
        setNewComment(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ content: newComment })
            });
            const data = await response.json();
            setNewComment([...newComment, data]);
        }
        catch (error) {
            console.error(error);
        }
    }
    
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
                <button className="button-create" onClick={() => setShowComments(!showComments)}>
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
                                onChange={handleChange} 
                            />
                            <button className="button-create" type="submit">Post</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostContainer;
