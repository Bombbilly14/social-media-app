
import React, { useState } from "react";
import './styles/Ventbox.css'
import { useNavigate } from 'react-router-dom'
import CreateIcon from '@mui/icons-material/Create';
import styles from "./styles/navbar.module.css"
import { NavLink } from "react-router-dom"
import SubmitButton from './SubmitButton'



function Ventbox({user}) {

    const navigate = useNavigate()

    const [popup,setPop] = useState(false);
    const [content, setContent] = useState("");
    const [textLimit, setTextLimit] = useState(250);
    
    const handleClickOpen = () => {
        setPop(!popup);
    }
    
    const closePopup = () => {
        setPop(false);
        navigate('/')
    }
    
    const handleChange = e => {
        setContent(e.target.value);
        setTextLimit(250 - e.target.value.length);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (content.length > 250) {
            alert("Text limit reached");
        } else {
            try {
                const response = await fetch(`/posts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ content: content })
                });
                const data = await response.json();
                console.log(data);
              navigate('/')
              setContent('')
              closePopup()
            } catch (error) {
                console.error(error);
            }
        }
    }

    return(
        <div>
            <NavLink to="/vent" style={{ textDecoration: 'none', fontWeight: 'bold' }} >
            <span onClick={handleClickOpen} className={styles.sideitem} style={{color: 'orange'}}>
                <CreateIcon/> 
            <span className={styles.linkText}>VentBox</span>
            </span>
            </NavLink>
            <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1 className='header-text'>What's on your mind, {user.name}?</h1>
                                {/* <button className="delete-button" onClick={closePopup}>X</button> */}
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <input className="textbox" placeholder="Enter text here" 
                                        value={content} 
                                        onChange={handleChange} 
                                        maxLength={250} 
                                    />
                                    <p>Characters remaining: {textLimit}</p>
                                    <SubmitButton handleSubmit={handleSubmit} closePopup={closePopup}/>
                                    {/* <input className="post-button" type="submit"/> */}
                                </form>
                            </div>
                        </div>
                    </div>:""
                }
            </div>
        </div>
    )
}
export default Ventbox;









































