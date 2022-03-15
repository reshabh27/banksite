import React, {useState} from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"
import {useremail , userpass} from "./Users"

const Login = ({ setLoginUser}) => {

    const history = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login2 = () => {
		if(useremail.indexOf(user.email) === -1){
			alert("Please Register The User")
			return
		}
		else
		{
			if(userpass[useremail.indexOf(user.email)] !== user.password){
				alert("Password is incorrect")
				return
			}
			else
			{
				// console.log(user)
				setLoginUser(user);
				history("/banksite");
			}
		}
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <button onClick={login2}>Login</button>
            <div>dont have an account?</div>
            <button onClick={() => history("/signup")}>Register</button>
        </div>
    )
}

export default Login