import './styles/ProfileCard.css';

const ProfileCard = ({ user }) => {
  return (
    <div className="card-container">
      <div className="card-header-container">
        <img className="card-avatar" src={user.avatar}></img>
        <h1 className="card-header">{user.name}</h1>
      </div>
      <p className="card-bio">Bio: {user.bio}</p>
      <div className="card-posts">
          {user.posts && user.posts.map(post => (
          <div key={post.id} className="card-post">
            <p className="card-post-content">{post.content}</p>
            <div className="card-post-footer">
              <p className="card-post-date">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;