import React from 'react';

import './App.css';
import styled from 'styled-components';

import Smurfs from "./Smurfs";
import SmurfForm from "../SmurfForm";


const H1 = styled.h1`
	align-item: center;
	color: #f5ea74;
	font-size: 4rem;
	text-align: center;
	
`;


function App() {

	return (
		<div>
			<H1>WELCOME TO THE SMURFVILLE!!</H1>
			<SmurfForm />
			<Smurfs />
		</div>
	);
}



export default App;
