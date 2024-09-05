import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout.jsx";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const {store} = useContext(Context)
	useEffect(()=>{
		
	},[store.isLog])
	
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{store.isLog?
					// (<Link to="/demo">
					(<Logout/>)
					// </Link>)
					:
					<button className="btn btn-primary" onClick={()=>console.log(localStorage.getItem('token'))}>Sign up</button>
					}
				</div>
			</div>
		</nav>
	);
};
