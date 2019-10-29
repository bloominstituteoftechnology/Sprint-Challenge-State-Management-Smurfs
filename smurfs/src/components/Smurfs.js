import React from 'react';

const Smurfs = props => {
	console.log(props);
	return (
		<div className="SmurfsCard">
			<h3>{props.smurf.name}</h3>
			<p>Age: {props.smurf.age}</p>
			<p>Height: {props.smurf.height}</p>
			<button onClick={() => props.deleteSmurf(props.smurf.id)}>Remove Smurf</button>
		</div>
	);
};

export default Smurfs;