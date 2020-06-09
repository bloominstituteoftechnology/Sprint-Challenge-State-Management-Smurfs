import React from 'react'; 
import styled from 'styled-components';

	const TheSmurf = styled.div`
	 margin: 2%;
	 background dodgerblue;
	 border: 1px double tomato;
    `

const Smurf = ({smurf}) => {
    // console.log("smurf: ", smurf); //test
	return (
		<TheSmurf key={smurf.id}>
			<h3>{smurf.name}</h3>
			<p>{smurf.age}</p>
			<p>{smurf.height}</p>
		</TheSmurf>
	)
};

export default Smurf;