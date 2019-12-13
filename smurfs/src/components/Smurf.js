import React from 'react';

const Smurf = props => {
	return (
		<div>
			<h3>{props.smurf.name}</h3>
            <p>Height: {props.smurf.height}</p>
			<p>Age: {props.smurf.age}</p>
			<button onClick={() => props.deleteSmurf(props.smurf.id)}>Remove</button>
		</div>
	);
};

export default Smurf;