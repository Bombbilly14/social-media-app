// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Popup from 'reactjs-popup'
// import './styles/Ventbox.css'



// const Ventbox = () => {
//   const [text, setText] = useState("");
//   const [photoAdded, setPhotoAdded] = useState(false);
//   const [postList, setPostList] = useState([]);
  
//   const handleChange = (event) => {
//     setText(event.target.value);
//   }

//   const togglePhoto = () => {
//     setPhotoAdded(!photoAdded);
//   }

//   const overflowAlert = () => {
//     if (remainingCharacters() < 0) {
//       if (photoAdded) {
//         var beforeOverflowText = text.substring(140 - 23 - 10, 140 - 23);
//         var overflowText = text.substring(140 - 23);
//       } else {
//         var beforeOverflowText = text.substring(140 - 10, 140);
//         var overflowText = text.substring(140);
//       }

//       return (
//         <div className="alert alert-warning">
//           <strong>Oops! Too Long:</strong>
//           &nbsp;...{beforeOverflowText}
//           <strong className="bg-danger">{overflowText}</strong>
//         </div>
//       );
//     } else {
//       return "";
//     }
//   }

//   const remainingCharacters = () => {
//     if (photoAdded) {
//       return 140 - 23 - text.length;
//     } else {
//       return 140 - text.length;
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(e)
//     try {
//       const response = await axios.post('/me/posts', {text});
//       if (response.ok) {
//         // Once the post is successfully created, fetch the updated list of posts and set it to the postList state variable
//         setPostList([...postList, response.data]);
//       } else {
//         console.error(response.statusText);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//         // <Popup trigger={<button> Vent</button>} position="right center">
//       <div className="well clearfix">
//       {overflowAlert()}
//       <textarea className="form-control" onChange={handleChange}></textarea>
//       <br/>
//       <span>{remainingCharacters()}</span>
//       <button className="btn btn-primary pull-right" onClick={handleSubmit}disabled={text.length === 0 && !photoAdded}>Tweet</button>
//       <button className="btn btn-default pull-right" onClick={togglePhoto}>
//         {photoAdded ? "✓ Photo Added" : "Add Photo"}
//       </button>
//     </div>
//     // </Popup>
//   );
// }

// export default Ventbox;


import React, { useState } from "react";
import './styles/Ventbox.css'
import {useNavigate} from 'react-router-dom'


function Ventbox({style}) {
    
    const [popup,setPop] = useState(false);
    const [content, setContent] = useState("");
    const [textLimit, setTextLimit] = useState(250);
    

    const handleClickOpen = () => {
        setPop(!popup);
    }

    const closePopup = () => {
        setPop(false);
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
                
            } catch (error) {
                console.error(error);
            }
        }
    }

    return(
        <div>
            <span onClick={handleClickOpen} className={style}>Vent</span>
            <div>
                {
                    popup?
                    <div className="main">
                        <div className="popup">
                            <div className="popup-header">
                                <h1>What's on your mind?</h1>
                                <button className="delete-button" onClick={closePopup}>X</button>
                            </div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <input className="textbox" placeholder="Enter text here" 
                                        value={content} 
                                        onChange={handleChange} 
                                        maxLength={250} 
                                    />
                                    <p>Characters remaining: {textLimit}</p>
                                    <button className="post-button"type="submit">Post</button>
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