// ***** ORIGINAL CODE ***** */

// import React from "react"
// import { Link } from "react-router-dom"
// // import favicon from "../styles/assets/twitter-logo.png"
// import "./styles/NavBar.css"


// function NavBar() {

// 	return (
		
// 		<div className ="nav-bar">
// 			{/* <Link to="/users">
// 				<img src={favicon} alt="logo" style={{ width: "40px" }} />
// 			</Link> */}
// 			<Link to="/">
// 				<h2>
// 					<i className="fa fa-home" aria-hidden="true" /> <span className="title">Home</span>
// 				</h2>
// 			</Link>
// 			<Link to="/profile">
// 				<h2>
// 					<i className="fa fa-user" aria-hidden="true" /> <span className="title">Profile</span>
// 				</h2>
// 			</Link>
// 			<Link to="/messages">
// 				<h2>
// 					<i className="fa fa-envelope" aria-hidden="true" /> <span className="title">Messages</span>
// 				</h2>
// 			</Link>
// 			<Link to="/notifications">
// 				<h2>
// 					<i className="fa fa-bell" aria-hidden="true" /> <span className="title">Notifications</span>
// 				</h2>
// 			</Link>
// 			<Link to="/users">
// 				<h2>
// 					<i className="fa fa-ellipsis-h" aria-hidden="true" /> <span className="title">More</span>
// 				</h2>
// 			</Link>
// 			<Link to="/signin">
// 				<h2>
// 					<i className="fa fa-ellipsis-h" aria-hidden="true" /> <span className="title">Sign In/create</span>
// 				</h2>
// 			</Link>
			
// 		</div>
// 	)
// }

// export default NavBar

// ***** ORIGINAL CODE ***** */



import React from 'react'
import { NavLink } from "react-router-dom"
import { navData } from "./navData.js";
import styles from "./styles/navbar.module.css"
import { useState } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Ventbox from './Ventbox'
import CreateIcon from '@mui/icons-material/Create';
import Modal from 'react-modal';


export default function NavBar() {

  const [open, setopen] = useState(false)

  const [modal, setmodal] = useState(false)
  
  const handleOpen = () => setmodal(!open);

  const handleClose = () => setmodal(false);

    const toggleOpen = () => {
        setopen(!open)
    }
  

    return (
      
      <div className={open?styles.sidenav:styles.sidenavClosed}>
          <button className={styles.menuBtn} onClick={toggleOpen}>
              {open? <KeyboardDoubleArrowLeftIcon />: <KeyboardDoubleArrowRightIcon />}
              </button>
          {navData.map(item =>{
            return <NavLink key={item.id} className={styles.sideitem} to={item.link}>
              {item.icon}
              <span className={styles.linkText}>{item.text}</span>
          </NavLink>
          })}
              {/* <CreateIcon onClick={handleOpen} className={styles.sideitem}/> */}
              <Ventbox style={styles.sideitem} />
{/* <Modal
  open={handleOpen}
  onRequestClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
</Modal> */}
              {/* <NavLink key={'ventbox'} className={styles.sideitem} to="/vent"> */}
              {/* </NavLink> */}
      </div>
    )
  }