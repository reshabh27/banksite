import { BrowserRouter as  Router, Route, Routes  } from "react-router-dom"
import './App.css';
import  SignUp   from './components/Signup';
import  Login  from './components/Login';
// import { Error } from './Error';
import { useState } from 'react';
import { Mybank } from './components/Mybank';
import { Passbook } from './components/Passbook';
import { Tax } from './components/Tax';



function App() {
	const [ user, setLoginUser] = useState({})
	return (
		<>
		{/* <Mybank setLoginUser={setLoginUser}/> */}
		{/* <Tax /> */}
			
				<Routes>
						<Route exact path="/" element={ user && user.email ? <Mybank setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
						<Route path="/banksite" element={ user && user.email ? <Mybank setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
						<Route path="/login" element={<Login setLoginUser={setLoginUser} />}  />
						<Route path="/signup" element={<SignUp />} />
						<Route path="/passbook" element={<Passbook />} />
						<Route path="/tax" element={<Tax />} />
					
				</Routes>
			

		</>
	);
}

export default App;
