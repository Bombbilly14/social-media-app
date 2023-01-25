import React from "react"
import { Link } from "react-router-dom"
// import favicon from "../styles/assets/twitter-logo.png"
import "./styles/NavBar.css"


function NavBar() {

	return (
		
		<div className ="nav-bar">
			{/* <Link to="/users">
				<img src={favicon} alt="logo" style={{ width: "40px" }} />
			</Link> */}
			<Link to="/">
				<h2>
					<i className="fa fa-home" aria-hidden="true" /> <span className="title">Home</span>
				</h2>
			</Link>
			<Link to="/profile">
				<h2>
					<i className="fa fa-user" aria-hidden="true" /> <span className="title">Profile</span>
				</h2>
			</Link>
			<Link to="/messages">
				<h2>
					<i className="fa fa-envelope" aria-hidden="true" /> <span className="title">Messages</span>
				</h2>
			</Link>
			<Link to="/notifications">
				<h2>
					<i className="fa fa-bell" aria-hidden="true" /> <span className="title">Notifications</span>
				</h2>
			</Link>
			<Link to="/users">
				<h2>
					<i className="fa fa-ellipsis-h" aria-hidden="true" /> <span className="title">More</span>
				</h2>
			</Link>
			<Link to="/signin">
				<h2>
					<i className="fa fa-ellipsis-h" aria-hidden="true" /> <span className="title">Sign In/create</span>
				</h2>
			</Link>
			
		</div>
	)
}

export default NavBar