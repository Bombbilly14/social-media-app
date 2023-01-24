import React from 'react'
import {useState, useEffect} from 'react'
import RegistrationForm from './RegistrationForm'

function SignIn({setUser}) {
    // this is not ok :(

    const [name, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault()
        fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name, password}),
    })
    .then(r => r.json())
    .then((data) => {
      if (!data.error) {
      setUser(data)
      }
    })
    }

    // const isSignedIn = !!user;

  return (
    <div>

    <>
    <h2>Sign in</h2>
    <form onSubmit={login}>
        <label htmlFor="signInName">name</label>
        <input
        // type="text"
        id="signInName"
        value={name}
        onChange={ e => setUsername(e.target.value)}/>
        <br />
        <label htmlFor="signInPassword">Password</label>
        <input
        type="password"
        id="signInPassword"
        value ={password}
        onChange={ (e) => setPassword(e.target.value)}
         />
        <input type= "submit" value="Sign In" />
    </form>
    </>


    </div>
  )
}

export default SignIn