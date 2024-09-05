import React from "react"
import { useNavigate } from "react-router-dom"

const LoginFooter = () => {
    const navigate = useNavigate()
    return (
        <div className="d-flex">
            <p className= "fs-5 fw-bold">Not Registered? <button onClick={()=>navigate('/register')} type="button" class="btn btn-link">Register now</button></p>
        </div>
    )
}
export default LoginFooter