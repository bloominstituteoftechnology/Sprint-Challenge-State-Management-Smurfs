import React from 'react'; 
import styled from 'styled-components';
import Card from '../utils/smurf-card.jpg';

	const TheSmurf = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 580px;
		height: 460px;
		margin: 0 30%;
		margin-bottom: 50px;
	 	background-image: url(${Card});
		border-radius: 350px;
		border: 10px solid black;
		font-size: 40px;
		line-height: 10%;
	`

const Smurf = ({smurf}) => {
    // console.log("smurf: ", smurf); //test
	return (
		<TheSmurf key={smurf.id}>
			<h3>{smurf.name}</h3>
			<p>age: {smurf.age}</p>
			<p>height: {smurf.height}</p>
		</TheSmurf>
	)
};

export default Smurf;