import React, { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';

const Profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(userData => setUsers(userData));
  }, []);

  return (
    <div>
      <ProfileCard users={users} />
    </div>
  );
}

export default Profile;