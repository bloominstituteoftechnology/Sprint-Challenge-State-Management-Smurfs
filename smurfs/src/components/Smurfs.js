import React from "react";
import "./App.css";
import { connect } from "react-redux";

// MARK: - custom action
import { getSmurfs } from "../actions";

const Smurfs = (props) => {
	return (
		<div className="smurf-list">
			<h1>Welcome to Smurf Village</h1>
			{!props.smurfs && <h5>Population: 0</h5>}
			{!props.smurfs && !props.isFetching && <h6>The Smurfs are hiding: <span>Press that button to get them out of their camoflagued homes!</span></h6>}
			{!props.smurfs && props.isFetching && <p>...</p>}
			{props.smurfs && <h5>Population: {props.smurfs.length}</h5>}
			{props.smurfs && !props.isFetching &&
				<div className="cards">
					{props.smurfs.map(smurf => (
						<div className="card">
							<p>Name: {smurf.name}</p>
							<p>Age: {smurf.age}</p>
							<p>Height: {smurf.height}</p>
						</div>
					))
					}
				</div>
			}
			{props.error && !props.isFetching && <h2>NETWORK ERROR: {props.error} ¯\_(ツ)_/¯</h2>}
			<button className="smurf-button" onClick={props.getSmurfs}>Le Pays Maudit!</button>
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

export default connect(mapStateToProps, { getSmurfs })(Smurfs);