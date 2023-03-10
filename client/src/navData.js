import HomeIcon from '@mui/icons-material/Home'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';


export const navData = [
    
    {
        id: 0,
        icon: <HomeIcon/>,
        text: <span style={{ fontWeight: 'bold'}}>Home</span>,
        link: "/"
    },
    {
        id: 1,
        icon: <AccountCircleIcon/>,
        text: <span style={{ fontWeight: 'bold'}}>Profile</span>,
        link: "/profile"
    },
 
    {
        id: 2,
        icon: <LoginIcon/>,
        text: <span style={{ fontWeight: 'bold'}}>Logout</span>,
        link: "/signin"
    },

]
// text: <span style={{ fontWeight: 'bold'}}>Ventbox</span>