import React, { useState } from "react";
import { connect } from "react-redux";
import { smurfGet, smurfPost, smurfDel } from "../actions/index";

function clg(...x) {
	for (let exes of x) console.log(exes);
}

const Smurfy = props => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [height, setHeight] = useState("");

	const handleName = e => {
		clg("handleName", e.target.value);
		setName(e.target.value);
	};

	const handleAge = e => {
		clg("handleAge", e.target.value);
		setAge(e.target.value);
	};

	const handleHeight = e => {
		clg("handleHeight", e.target.value);
		setHeight(e.target.value);
	};

	const handleSubmit = e => {
		clg("handleSubmit", e.target.value);

		e.preventDefault();
		props.smurfPost({ name: name, age: age, height: height });
		setName("");
		setAge("");
		setHeight("");
	};

	const handleDel = e => {
		clg("handleDel", e.target.value);
		props.smurfDel({ id: e.target.value });
	};

	return (
		<>
			{props.isWorking && <div>Loading . . .</div>}
			{props.error && <div>{props.error.message}</div>}

			{/* `if` smurflist != null, then render the form and smurflist */}
			{props.smurfList.length != 0 && (
				<>
					<form>
						<input type="text" onChange={handleName} name="name" placeholder="New Smurf Name" />
						<input type="text" onChange={handleAge} name="age" placeholder="Age" />
						<input type="text" onChange={handleHeight} name="height" placeholder="Height" />
						<button type="submit" onClick={handleSubmit}>
							Add Smurf!
						</button>
					</form>
					<ul>
						{props.smurfList.map(e => (
							<li key={e.name}>
								<span>{e.name}, </span>
								<span>{e.age}, </span>
								<span>{e.height}</span>
								<button onClick={handleDel} value={e.id}>
									Del
								</button>
							</li>
						))}
					</ul>
				</>
			)}
		</>
	);
};

const mapStateToProps = state => state;

export default connect(
	mapStateToProps,
	{ smurfPost, smurfGet, smurfDel }
)(Smurfy);
