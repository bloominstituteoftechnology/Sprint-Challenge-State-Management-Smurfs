import React from 'react';

const Smurf = props => {
	return (
		<div className="Smurf">
			<h3>{props.smurf.name}</h3>
            <p>Height: {props.smurf.height}</p>
			<p>Age: {props.smurf.age}</p>
			<button onClick={() => props.Remove(props.smurf.id)}>Remove</button>
		</div>
	);
};

export default Smurf;