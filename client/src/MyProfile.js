import React, {useState, useEffect} from 'react'
import MyProfileCard from "./MyProfileCard"

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
      <MyProfileCard user={user}/>
    </div>
  )
}

export default MyProfile