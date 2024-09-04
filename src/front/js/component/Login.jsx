import React,{useState,useContext} from "react"
import { Context } from "../store/appContext.js";

const Login =()=>{
    const {actions} = useContext(Context);
    const [data,setData] = useState({
        "email": "",
        "password": ""
    })
    const handleLogin=async(e)=>{
        e.preventDefault();
        try{
            await actions.login(data)
        }catch(e){
            console.error(e)
        }
    }
    const handlerData=(e)=>{
        let value = e.target.value;
        let prop = e.target.name;
        setData({...data,[prop]:value})
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>               
                <label htmlFor="email">Email</label>
                <input name="email" value={data.email} id="email" type="email" onChange={handlerData}/>
                <br />
                <label htmlFor="password">Password</label>
                <input name="password" value={data.password} id="password" type="password" onChange={handlerData}/>
                <br />
                <button className="btn btn-success" type="submit">Log in</button>
            </form>
        </div>
    )
}

export default Login