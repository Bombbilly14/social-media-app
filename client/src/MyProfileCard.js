import './styles/ProfileCard.css';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

const MyProfileCard = ({ user, setUser }) => {
  const [editing, setEditing] = useState(false);
  const [newBio, setNewBio] = useState("");
  const [editingPost, setEditingPost] = useState(null);
  const {username} = useParams()
  if(!user){
    return <div>Loading...</div>;
  }

  const handleEdit = () => {
    setEditing(!editing);
  }


const handleSubmit = async (event) => {

    event.preventDefault();
    try {
      const response = await fetch(`/users/${user.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bio: newBio,
        }),
      });
      if (response.ok) {
        setEditing(false);
        setUser({...user, bio: newBio})
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  }


  const handlePostEdit = (post) => {
    setEditingPost({...post});
  }

  const handlePostSave = async (post) => {
    try {
      const response = await fetch(`/users/${user.id}/posts/${post.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: post.content,
        }),
      });
      if (response.ok) {
        setEditingPost(null);
        setUser({...user, posts: user.posts.map(p => p.id === post.id ? post : p)})
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handlePostDelete = (post) => {
    fetch(`/users/${user.id}/posts/${post.id}`, {
    method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setEditingPost(null)
        setUser(prevUser => {
          return {...prevUser, posts: prevUser.posts.filter(p => p.id !== post.id)}
        });
    }
    })
    .catch(error => {
    console.error(error);
    });
    }
  return (
    <div className="card-container">
      <div className="card-header-container">
        <img className="card-avatar" src={user.avatar}></img>
        <h1 className="card-header">{user.name}</h1>
      </div>
      { editing ? (
        <form onSubmit={handleSubmit}>
          <input type="text" value={newBio} onChange={(event) => setNewBio(event.target.value)}/>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <p className="card-bio">Bio: {user.bio}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
      <div className="card-posts">
          {user.posts && user.posts.map(post => (
          <div key={post.id} className="card-post">
            {editingPost && editingPost.id === post.id ? (
              <>
                <input type="text" value={editingPost.content} onChange={(event) => setEditingPost({...editingPost, content: event.target.value})}/>
                <button onClick={() => handlePostSave(editingPost)}>Save</button>
                <button onClick={() => setEditingPost(null)}>Cancel</button>
              </>
            ) : (
              <>
                <p className="card-post-content">{post.content}</p>
                <div className="card-post-footer">
                  <p className="card-post-date">{post.date}</p>
                  <button onClick={() => handlePostEdit(post)}>Edit</button>
                  <button onClick={() => handlePostDelete(post)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProfileCard;

