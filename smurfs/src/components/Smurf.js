import React from "react";
import { connect } from "react-redux";

// MARK: - custom action
import { getSmurfs } from "../actions";

const Smurf = (props) => {
	return (
		<div>
			<h1>Welcome to Smurf Village</h1>
			<h5>Population: 0</h5>
			{!props.smurfs && !props.isFetching && <h6>The Smurfs are hiding: <span>Press that button to get them out of their camoflagued homes!</span></h6>}
			{!props.smurfs && props.isFetching && <p>...</p>}
			{props.smurfs && 
				<div>
					{props.smurfs.map(smurf => (
						<div>
							<p>{smurf.name}</p>
							<p>{smurf.age}</p>
							<p>{smurf.height}</p>
						</div>
					))
					}
				</div>
			}
			{props.error && !props.isFetching && <h2>NETWORK ERROR: {props.error} ¯\_(ツ)_/¯</h2>}
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