import React, { createFactory } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs } from './../actions';

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs
	};
};

const Smurfs = props => {
	return (
		<div>
			<h1>Smurfs Village</h1>
			<button onClick={props.fetchSmurfs}>Enter Village</button>
		</div>
	);
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs);
