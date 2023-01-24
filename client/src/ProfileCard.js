import React from 'react'

const ProfileCard = ({users}) => {
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
  )
}

export default ProfileCard