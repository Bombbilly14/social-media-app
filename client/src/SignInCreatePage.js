import React from 'react'
import {useState, useEffect} from 'react'
import RegistrationForm from './RegistrationForm'
import SignIn from "./SignIn.js"

function SignInCreatePage() {

    
    const [user, setUser] = useState()

    useEffect(()=> {
      fetch('/me')
      .then(r => r.json())
      .then(data => {
        if(data.error) {
          setUser(null)
        } else {
        setUser(data)
        }
      } )
    }, [])


    const logout = () => {
      fetch('/logout', {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json"

      }
    })
    .then (() => {
      setUser(null)
    })

    }

    // const isSignedIn = !!user;

  return (
    <div>
      {user ? <button onClick ={logout}>Logout</button> : null}
      <h1>Welcome {user ? ` ${user.name}`: null}</h1>
      {user === null ? (
        <>
        <RegistrationForm  setUser={setUser}/>
        <SignIn setUser={setUser}/>
        </>
    ) : null}
    </div>
  )
}

export default SignInCreatePage