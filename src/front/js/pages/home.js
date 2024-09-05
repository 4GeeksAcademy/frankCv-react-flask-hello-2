import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Login from "../component/Login.jsx";
import LoginFooter from "../component/LoginFooter.jsx";



export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column text-center mt-5 align-items-center">	
			<Login/>	
			<LoginFooter/>
		</div>
	);
};
