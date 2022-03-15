import React from 'react'
import { useNavigate } from "react-router-dom"
import "./taxstyle.css"

export const Tax = () => {
	const history = useNavigate()
  return (
	<div className='taxstyle'>
		Tax will be calculated in future
		<br />
		<button onClick={() => history("/banksite")}>Back to mybank</button>
	</div>
  )
}
