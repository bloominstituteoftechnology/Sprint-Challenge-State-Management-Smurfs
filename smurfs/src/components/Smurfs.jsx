import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from './../actions';

const mapStateToProps = state => {
	console.log('this', state);
	return {
		name: state.village.name,
		age: state.village.age,
		height: state.village.height
	};
};

const Smurfs = props => {
	return (
		<div>
			<h1>Smurfs Village</h1>
			<h3>{props.name}</h3>
			<h3>{props.age}</h3>
			<h3>{props.height}</h3>
			<button onClick={props.fetchSmurfs}>Enter Village</button>
		</div>
	);
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
