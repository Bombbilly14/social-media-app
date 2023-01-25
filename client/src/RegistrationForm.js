import React, {useState, useEffect} from 'react'


function RegistrationForm({setUser}) {
  const [name, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const createAccount = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return
    }
    //@@test
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setMessage('Password must be at least 8 characters long, contain at least one letter and one number');
      return
    }
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
    {message && <p>{message}</p>}
    <h2>Sign Up!</h2>
    <form onSubmit={createAccount}>
        <label htmlFor="name">name</label>
        <input
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
         <br />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <br />
        <input type= "submit" value="create account" />
    </form>
    </>
  )
}

export default RegistrationForm