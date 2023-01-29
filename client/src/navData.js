import HomeIcon from '@mui/icons-material/Home'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';


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
        icon: <LoginIcon/>,
        text: "Signup/Login",
        link: "/signin"
    },

]