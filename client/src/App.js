import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import NavBar from './NavBar';
import Messages from './Messages.js'
import Notifications from './Notifications.js'
import SignInCreatePage from './SignInCreatePage.js';
import ProfilePage from './ProfilePage';
import MyProfile from './MyProfile';
import PrivateRoute from './utils/PrivateRoute.js'
import React, {useState, useEffect} from 'react'
import Ventbox from './Ventbox';






function App() {
  const [user, setUser] = useState("")
    

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


  return (
    <>
      <NavBar user={user}/>
      
    <div className="App">

      <Routes>
        <Route element={<PrivateRoute user={user} setUser={setUser}/>}>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<MyProfile/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route exact path="/" element={<Home user={user}/>} />
        <Route path="/users/:username" element={<ProfilePage />} />
        <Route path="/vent" element={<Ventbox />} />
        </Route>
        <Route path="/signin" element={<SignInCreatePage user={user} setUser={setUser}/>} />
        {/* <Route path="/*" element={<SignInCreatePage />} /> */}
        {/* <Route exact path="/" render={() => <Navigate replace to="/home" />} /> */}
      </Routes>
    </div>
    </>
  );
}

export default App;
