import React from 'react';

export const Smurf = props => {
	console.log('here', props);
	return (
		<div>
			<h1>{props.s.name}</h1>
		</div>
	);
};
