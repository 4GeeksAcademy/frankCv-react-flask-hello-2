import React, { useContext } from "react"
import { Context } from "../store/appContext"


const Logout =()=>{
    const {actions}=useContext(Context)

    return (
        <div>           
            <button onClick={()=>{
                localStorage.setItem('token',"")
                localStorage.setItem('email',"")  
                actions.logoutHandler()      
            }}>Log Out</button>
        </div>
    )
}

export default Logout