import React from 'react'
import { usname, moblno, passbno, amnt  } from "./Users"
import "./passbook.css"
import { useNavigate } from "react-router-dom"

export const Passbook = () => {
	const history = useNavigate()
  return (
	<div className='passbookstyle'>
		<h1>Passbook</h1>
		<table>
			<tr>
				<th>Name</th>
				<th>Passbook No</th>
				<th>Amount</th>
				<th>Mobile No</th>
			</tr>
			{usname.map((name, index) => {
				return (
					<tr>
						<td>{name}</td>
						<td>{passbno[index]}</td>
						<td>{amnt[index]}</td>
						<td>{moblno[index]}</td>
					</tr>
				)
			})}
		</table>
			<button onClick={() => history("/banksite")}>Back to mybank</button>
	</div>
  )
}
