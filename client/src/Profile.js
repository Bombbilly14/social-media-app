import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>{user.avatar}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;