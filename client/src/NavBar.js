import React from 'react'
import { NavLink } from "react-router-dom"
import { navData } from "./navData.js";
import styles from "./styles/navbar.module.css"
import { useState } from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Ventbox from './Ventbox'



export default function NavBar({user}) {

  const [open, setopen] = useState(false)

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
              <Ventbox user={user}/>
      </div>
    )
  }