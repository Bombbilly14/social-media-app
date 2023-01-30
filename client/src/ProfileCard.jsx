import './styles/ProfileCard.css';
import moment from 'moment';

const FormattedTime = ({ created_at }) => {
  const formattedTime = moment.utc(created_at).local().format("MMMM Do YYYY, h:mmA");
  return <p style={{color: "white"}}>{formattedTime}</p>;
};


const ProfileCard = ({ user }) => {
  if(!user){
    return <div>Loading...</div>;
}
  
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
            <FormattedTime className="time-posted" created_at={post.created_at} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;