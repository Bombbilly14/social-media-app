import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home.js';
import About from './About.js';
import Profile from './Profile.js';
import NavBar from './NavBar';
import Messages from './Messages.js'
import Notifications from './Notifications.js'
import SignInCreatePage from './SignInCreatePage.js';


function App() {
  return (
    <>
      <NavBar />
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/messages" element={<Messages/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route exact path="/" element={<Home/>} />
        <Route path="/signin" element={<SignInCreatePage />} />
        {/* <Route exact path="/" render={() => <Navigate replace to="/home" />} /> */}
      </Routes>
    </div>
    </>
  );
}

export default App;
