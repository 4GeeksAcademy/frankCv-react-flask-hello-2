import React, { useContext } from "react"
import { Context } from "../store/appContext"


const Logout =()=>{
    const {actions}=useContext(Context)

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={()=>{
                localStorage.setItem('token',"")
                localStorage.setItem('email',"")  
                actions.logoutHandler()      
            }}>LOG OUT</button>
        </div>
    )
}

export default Logout