import React, {useState, useEffect} from 'react'

function RegistrationForm({setUser}) {
  const [name, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const createAccount = (e) => {
    e.preventDefault()
    fetch('/users', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({name, password}),
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
    <>
    <h2>Sign Up!</h2>
    <form onSubmit={createAccount}>
        <label htmlFor="name">name</label>
        <input
        // type="text"
        id="name"
        value={name}
        onChange={ e => setUsername(e.target.value)}/>
        <br />
        <label htmlFor="password">Password</label>
        <input
        type="password"
        id="password"
        value ={password}
        onChange={ (e) => setPassword(e.target.value)}
         />
        <input type= "submit" value="create account" />
    </form>
    </>
  )
}

export default RegistrationForm