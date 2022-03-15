import React, { useState } from "react"
import "./signup.css"
import { useNavigate } from "react-router-dom"
import {useremail , userpass} from "./Users"

const Signup = () => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        const { email, password, reEnterPassword } = user
        if( email && password && (password === reEnterPassword)){
            if(useremail.indexOf(email) === -1){
				useremail.push(user.email);
				userpass.push(user.password);
				alert("User Registered Successfully")
				history("/login")
			}
			else
			{
				alert("User already exists")
			}
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="signup">
            <h1>signup</h1>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" minLength="8" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" minLength="8" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <button onClick={signup} >Signup</button>
			
            <div>Already have an account?</div>
            <button onClick={() => history("/login")}>Login</button>
        </div>
    )
}

export default Signup