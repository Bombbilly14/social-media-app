import React, {useState, useEffect} from 'react'

function RegistrationForm({setUser}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const createAccount = (e) => {
    e.preventDefault()
    fetch('/users', {
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
  return (
    <form onSubmit={createAccount}>
        <label htmlFor="sign-in-username">Username</label>
        <input
        // type="text"
        id="sign-in-username"
        value={username}
        onChange={ e => setUsername(e.target.value)}/>
        <label htmlFor="password">Password</label>
        <input
        type="password"
        id="sign-in-password"
        value ={password}
        onChange={ (e) => setPassword(e.target.value)}
         />
        <input type= "submit" value="create account" />
    </form>
  )
}

export default RegistrationForm