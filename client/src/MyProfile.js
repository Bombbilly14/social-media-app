import React, {useState, useEffect} from 'react'
import ProfileCard from "./ProfileCard"

const MyProfile = () => {
  const [user, setUser] = useState()
    

  useEffect(()=> {
    fetch('/me')
    .then(r => r.json())
    .then(data => {
      setUser(data)
      }
     )
  }, [])
  return (
    <div>
      <ProfileCard user={user}/>
    </div>
  )
}

export default MyProfile