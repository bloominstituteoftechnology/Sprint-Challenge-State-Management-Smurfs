import React, { Component } from "react";
import { connect } from "react-redux";
import { smurfGet } from "../actions";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const Header = props => {
	return (
		<>
		<button onClick={() => props.smurfGet()}>
			Let's Get Smurfy!
		</button>
		<p />
		<hr />
		<p />
		</>
	);
};

const mapStateToProps = state => state;
const mapDispatchToProps = { smurfGet: smurfGet }; // move to Header

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
