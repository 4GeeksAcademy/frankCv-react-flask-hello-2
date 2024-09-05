import React, { useState, useContext } from "react"
import { Context } from "../store/appContext.js";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [data, setData] = useState({
    })
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await actions.register(data)
        } catch (e) {
            console.error(e)
        }
    }
    const handlerData = (e) => {
        console.log(data)
        let value = e.target.value;
        let prop = e.target.name;
        setData({ ...data, [prop]: value })
    }
    //  <form onSubmit={handleRegister}>
    //             <label htmlFor="name">Name</label>
    //             <input name="name" value={data.name} id="name" type="text" onChange={handlerData} />
    //             <br />
    //             <label htmlFor="email">Email</label>
    //             <input name="email" value={data.email} id="email" type="email" onChange={handlerData} />
    //             <br />
    //             <label htmlFor="password">Password</label>
    //             <input name="password" value={data.password} id="password" type="password" onChange={handlerData} />
    //             <br />
    //             <button className="btn btn-success" type="submit">Registrar</button>
    //         </form>
    return (
        <div className="container d-flex flex-column align-items-center mx-auto my-5 border border-success p-1">
            <h1>Register</h1>

            <div className="container-fluid">
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label for="regName" className="form-label">Name</label>
                        <input name="name" type="text" className="form-control" id="regName" onChange={handlerData} style={{ width: "100%" }} />
                    </div>
                    <div className="mb-3">
                        <label for="regLastName" className="form-label">Last Name</label>
                        <input name="last_name" type="text" className="form-control" id="regLastName" onChange={handlerData} />
                    </div>
                    <div className="mb-3">
                        <label for="regEmail" className="form-label">Email address</label>
                        <input name="email" type="text" className="form-control" id="regEmail" aria-describedby="emailHelp" onChange={handlerData} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="regAddress" className="form-label">Address</label>
                        <input name="address" type="text" className="form-control" id="regAddress" onChange={handlerData} />
                    </div>
                    <div className="mb-3">
                        <label for="regPhone" className="form-label">Phone</label>
                        <input name="phone" type="text" className="form-control" id="regPhone" onChange={handlerData} />
                    </div>
                    <div className="mb-3">
                        <label for="regPassword" className="form-label">Password</label>
                        <input name="password" type="password" className="form-control" id="regPassword" onChange={handlerData} />
                    </div>
                    <div className="container d-flex justify-content-center">
                        <button onClick={() => navigate('/')} type="button" className="btn btn-primary me-3" style={{ minWidth: "80px" }}>
                            <i className="fa-solid fa-person-walking-arrow-loop-left pe-1"></i>Home</button>
                        <button type="submit" className="btn btn-primary" style={{ minWidth: "80px" }}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register