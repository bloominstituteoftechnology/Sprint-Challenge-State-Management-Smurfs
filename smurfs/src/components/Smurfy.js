import React from "react";
import { connect } from "react-redux";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const Smurfy = (props) => {

	return (
		<>
			{props.isFetching && <div>Loading . . .</div>}
			{props.error && <div>{props.error.message}</div>}
			<ul>
				{props.smurfList.map(e => (
					<li key={e.name}>{e.name}</li>
				))}
			</ul>
		</>
	);
};

const mapStateToProps = state => state;

export default connect(
	mapStateToProps, {}
)(Smurfy);
