import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from './../actions';
import { Smurf } from './Smurf';

const mapStateToProps = state => {
	console.log(state);
	return {
		village: state.village
	};
};

const Smurfs = props => {
	console.log('PROPS', props.village);
	return (
		<div>
			<h1>Smurfs Village</h1>
			{console.log('here hrer', props.village)}
			{props.village.map(s => (
				<Smurf s={s} />
			))}
			<button>Put Village on Fire</button>
			<button onClick={props.fetchSmurfs}>Enter Village</button>
		</div>
	);
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
