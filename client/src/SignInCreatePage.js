import React from 'react'
import {useState, useEffect} from 'react'
import RegistrationForm from './RegistrationForm'
import SignIn from "./SignIn.js"
import Modal from 'react-modal';
import "./styles/Form.css"
Modal.setAppElement('#root')

function SignInCreatePage() {
    const [user, setUser] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    

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

    return (
      <div className="modalParent">
        {user ? <button onClick={logout}>Logout</button> : null}
        <h1>Welcome {user ? ` ${user.name}` : null}</h1>
        {user === null ? (
          <>
            <SignIn setUser={setUser} />
            <br/>
            <button onClick={openModal}>Create Profile</button>
            <Modal alt="modal waddup" className={modalIsOpen ? "isOpen" : "isClosed"} isOpen={modalIsOpen} onRequestClose={closeModal} >
              <br/>
              <RegistrationForm setUser={setUser} />
              
              <button onClick={closeModal}>Close</button>
            </Modal>
          </>
        ) : null}
      </div>
    );
}

export default SignInCreatePage