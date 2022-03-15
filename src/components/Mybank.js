import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { usname, moblno, passbno, amnt  } from "./Users"
import "./mybank.css"

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'


export const Mybank = ({setLoginUser}) => {
	const history = useNavigate()

	const [user, setUser] = useState({
		uname: "",
		passbookno : "",
		amount: ""
	})
	const [moblilen, setMobilen] = useState(0)

	const handleChange = e => {
		const { name, value } = e.target
		setUser({
			...user,
			[name]: value
		})
	}

	const addmoney = () => {
		const { uname, passbookno, amount } = user;
		// console.log(user);
		let mobno = moblilen;
		// console.log(mobno);
		if(uname && passbookno && amount && mobno)
		{
			usname.push(uname);
			passbno.push(passbookno);
			amnt.push(amount);
			moblno.push(mobno);
			alert("Money Added Successfully")
		}
		else
		{

			alert("We Cannot Process Your Request Choose Some Other Bank")
			// console.log(user)
			setLoginUser(null);
			history(`/login`);
		}
	}
	return (
		<div className="mybank">
			<h1>My bank</h1>
			<input type="text" name="uname" value={user.uname} placeholder="Name" onChange={handleChange}></input>
			<input type="text" minLength="12" maxLength="12" name="passbookno" value={user.passbookno} placeholder="Passbook No" onChange={handleChange}></input>
			<input type="number" max="6000" min="0" name="amount" value={user.amount} placeholder="Amount in $" onChange={handleChange}></input>
			<PhoneInput className="btn1" countrySelectProps={{ unicodeFlags: true }} placeholder="Enter phone number" value={moblilen} onChange={setMobilen}/>
			{/* <input type="text" name="mobno" value={user.mobno} placeholder="Mobile No" onChange={handleChange}></input> */}
			<button onClick={addmoney} >Add Money</button>
			<div>GO TO</div>

			<button onClick={() => history("/passbook")}>Passbook</button>
			<button className="button" onClick={() => history("/tax")}>Tax</button>
			<button className="button" onClick={() => setLoginUser(null)}>Log-out</button>
		</div>
	)
}
