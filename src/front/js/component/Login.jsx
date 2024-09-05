import React, { useState, useContext, useEffect } from "react"
import { Context } from "../store/appContext.js";
import Logout from "./Logout.jsx";

const Login = () => {
    const { actions } = useContext(Context);
    const [data, setData] = useState({
        "email": "",
        "password": ""
    })
    useEffect(() => { }, [])
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await actions.login(data)
        } catch (e) {
            console.error(e)
        }
    }
    const handlerData = (e) => {
        let value = e.target.value;
        let prop = e.target.name;
        setData({ ...data, [prop]: value })
    }
    // <form onSubmit={handleLogin}>               
    //     <label htmlFor="email">Email</label>
    //     <input name="email" value={data.email} type="email" onChange={handlerData}/>
    //     <br />
    //     <label htmlFor="password">Password</label>
    //     <input name="password" value={data.password}type="password" onChange={handlerData}/>
    //     <br />
    //     <button className="btn btn-success" type="submit">Log in</button>
    // </form>
    return (
        <div>
            <h1>Login</h1>
            <div className="container border border-success mx-auto p-3">
                    <form onSubmit={handleLogin}>
                        <div className="mb-3 text-start">
                            <label for="regEmail" className="form-label">Email address</label>
                            <input name="email" type="text" className="form-control" id="regEmail" aria-describedby="emailHelp" onChange={handlerData} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3 text-start">
                            <label for="regPassword" className="form-label">Password</label>
                            <input name="password" type="password" className="form-control" id="regPassword" onChange={handlerData} />
                        </div>
                        {localStorage.getItem('token') ?
                            <Logout />
                            :
                            <button type="submit" className="btn btn-success">Sign in</button>
                        }
                    </form>
                </div>
        </div>
    )
}

export default Login