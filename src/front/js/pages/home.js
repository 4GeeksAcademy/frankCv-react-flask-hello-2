import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Register from "../component/Register.jsx";
import Login from "../component/Login.jsx";
import Logout from "../component/Logout.jsx";
import GetRestricted from "../component/GetRestricted.jsx";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Register/>
			<br/>
			<Login/>
			<br/>
			<GetRestricted/>
			<br/>
			<Logout/>
		</div>
	);
};
