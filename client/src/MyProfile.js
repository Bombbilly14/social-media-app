import React, {useState, useEffect} from 'react'
import MyProfileCard from "./MyProfileCard"
import './styles/MyProfile.css'

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
    <div className='my-profile'>
      <MyProfileCard user={user} setUser={setUser}/>
    </div>
  )
}

export default MyProfile