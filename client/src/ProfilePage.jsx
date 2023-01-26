import React from 'react'
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom'
import ProfileCard from './ProfileCard'

const ProfilePage = () => {
  
    const {username} = useParams()

    const [user, setUser] = useState([]);

  useEffect(() => {
        fetch(`/users/${username}`)
        .then(res => res.json())
        .then(userData => setUser(userData));
    }, []);
  
    return (
        <div>
            <ProfileCard user={user} />
        </div>
    )
}

export default ProfilePage