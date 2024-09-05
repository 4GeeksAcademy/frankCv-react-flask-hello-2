import React, { useContext } from "react"
import { Context } from "../store/appContext"


const Logout =()=>{
    const {actions}=useContext(Context)

    return (
        <div>           
            <button onClick={()=>{
                localStorage.clear() 
                actions.logoutHandler()      
            }}>Log Out</button>
        </div>
    )
}

export default Logout