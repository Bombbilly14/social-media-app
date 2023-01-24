import React from 'react'
import {useState, useEffect} from 'react'
import RegistrationForm from './RegistrationForm'

function SignIn() {
    // this is not ok :(

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
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

    const login = (e) => {
        e.preventDefault()
        fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username, password}),
    })
    .then(r => r.json())
    .then((data) => {
      if(data.error) {
        setUser(null)
      } else {
      setUser(data)
      }
    })
    }

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
        <SignIn />
        </>
    ) : null}
    </div>
  )
}

export default SignIn