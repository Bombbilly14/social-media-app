import React from 'react'
import {useState, useEffect} from 'react'
import RegistrationForm from './RegistrationForm'

function SignIn({setUser}) {
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


  return (
    <div>

    <>
    <h2>Sign in</h2>
    <form onSubmit={login}>
        <label htmlFor="signInName"></label>
        <input
        id="signInName"
        value={name}
        onChange={ e => setUsername(e.target.value)}
        placeholder="Name"/>
        
        <br />
        <label htmlFor="signInPassword"></label>
        <input
        type="password"
        id="signInPassword"
        value ={password}
        onChange={ (e) => setPassword(e.target.value)}
        placeholder="Password"
         />
         <br/>
         <div className="button-container">
        <input type= "submit" value="Sign In" />
        </div>
    </form>
    </>


    </div>
  )
}

export default SignIn