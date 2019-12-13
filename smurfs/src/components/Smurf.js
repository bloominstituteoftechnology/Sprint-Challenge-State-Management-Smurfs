import React from "react";
import { connect } from "react-redux";

// MARK: - custom action
import { getSmurfs } from "../actions";

const Smurf = (props) => {
	return (
		<div>
			<h1>Welcome to Smurf Village</h1>
			<h5>Population: 0</h5>
			<h6>The Smurfs are hiding: <span>Press that button to get them out of their camoflagued homes!</span></h6>
			<button onClick={props.getSmurfs}>Le Pays Maudit!</button>
		</div>
	)
};

// MARK: - store grab
const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		isFetching: state.isFetching,
		error: state.error
	}
}

export default connect(mapStateToProps, { getSmurfs })(Smurf);