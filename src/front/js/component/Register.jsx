import React,{useState,useContext} from "react"
import { Context } from "../store/appContext.js";

const Register =()=>{
    const {actions} = useContext(Context);
    const [data,setData] = useState({
        "name": "",
        "email": "",
        "password": "",
    })
    const handleRegister=async(e)=>{
        e.preventDefault();
        try{
            await actions.register(data)
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
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input name="name" value={data.name} id="name" type="text" onChange={handlerData}/>
                <br />
                <label htmlFor="email">Email</label>
                <input name="email" value={data.email} id="email" type="email" onChange={handlerData}/>
                <br />
                <label htmlFor="password">Password</label>
                <input name="password" value={data.password} id="password" type="password" onChange={handlerData}/>
                <br />
                <button className="btn btn-success" type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default Register