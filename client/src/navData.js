import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import SendIcon from '@mui/icons-material/Send';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreateIcon from '@mui/icons-material/Create';
import Ventbox from './Ventbox'
import Popup from 'reactjs-popup'
import {useState} from 'react'


export const navData = [
    
    {
        id: 0,
        icon: <HomeIcon/>,
        text: "Home",
        link: "/"
    },
    {
        id: 1,
        icon: <AccountCircleIcon/>,
        text: "Profile",
        link: "/profile"
    },
    {
        id: 2,
        icon: <SendIcon/>,
        text: "Messages",
        link: "/messages"
    },
    {
        id: 3,
        icon: <NotificationsIcon/>,
        text: "Notifications",
        link: "/notifications"
    },

    {
        id: 5,
        icon: <HowToRegIcon/>,
        text: "Signup/Login",
        link: "/signin"
    },

    // {
    //     id: 6,
    //     icon: <CreateIcon/>,
    //     text: "VentBox",
    //     component: "Ventbox",
    //     link: "/vent"
    // }
]