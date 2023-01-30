import './styles/ProfileCard.css';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import moment from 'moment';


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

  const FormattedTime = ({ created_at }) => {
    const formattedTime = moment.utc(created_at).local().format("MMMM Do YYYY, h:mmA");
    return <p style={{color: "white"}}>{formattedTime}</p>;
};


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

  const handlePostSave = async (post, e) => {
    e.preventDefault()

    try {
      const response = await fetch(`/users/${user.id}/posts/${post.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: editingPost.content
        }),
      });
      if (response.ok) {
        // console.log(response)
        setUser({...user, posts: user.posts.map(p => p.id === post.id ? editingPost : p)})
        setEditingPost(null);
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  }
  // console.log(user)
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
          <input className="margin-input"type="text" value={newBio} onChange={(event) => setNewBio(event.target.value)}/>
          <button className="button-create"type="submit">Save</button>
        </form>
      ) : (
        <>
          <p className="card-bio">Bio: {user.bio}</p>
          <button className="button-create" onClick={handleEdit}>Edit</button>
        </>
      )}
      <div className="card-posts">
          {user.posts && user.posts.map(post => (
          <div key={post.id} className="card-post">
            {editingPost && editingPost.id === post.id ? (
              <>
              <form onSubmit={(e) => handlePostSave(post, e) }>
                <input type="text" value={editingPost.content} onChange={(event) => setEditingPost({...editingPost, content: event.target.value})}/>
                <button type="submit" className="button-create">Save</button>
                <button className="button-create">Cancel</button>
                </form>
              </>
            ) : (
              <>
                <p className="card-post-content">{post.content}</p>
                <div className="card-post-footer">
                <FormattedTime className="time-posted" created_at={post.created_at} />
                  <button className="button-create"onClick={() => handlePostEdit(post)}>Edit</button>
                  <button className="button-create"onClick={() => handlePostDelete(post)}>Delete</button>
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

