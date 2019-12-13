import React, { useState } from "react";
import { connect } from "react-redux";
import "./App.css";

// MARK: - Action
import { postSmurf } from "../actions";

const SmurfForm = (props) => {


	const [newSmurfRecruitName, setNewSmurfRecruitName] = useState("");
	const [newSmurfRecruitAge, setNewSmurfRecruitAge] = useState("");
	const [newSmurfRecruitHeight, setNewSmurfRecruitHeight] = useState("");

	const handleChangeOnName = (event) => {
		setNewSmurfRecruitName(event.target.value);
	}

	const handleChangeOnAge = (event) => {
		setNewSmurfRecruitAge(event.target.value);
	}

	const handleChangeOnHeight = (event) => {
		setNewSmurfRecruitHeight(event.target.value);
	}

	const handleClick = (event) => {
		event.preventDefault();
		let smurfObject = {
			name: newSmurfRecruitName,
			age: newSmurfRecruitAge,
			height: newSmurfRecruitHeight
		}
		props.postSmurf(smurfObject)
	}

	return (

		<div className="smurf-form">
			<h4>New Smurf Recruits Sign Up</h4>
			<h6>Join the legion of blue!</h6>
			<input
				className="smurf-input" 
				type="text"
				name="newSmurfRecruitName"
				placeholder="Smurf Name"
				value={newSmurfRecruitName}
				onChange={handleChangeOnName}
			/>
			<input 
				className="smurf-input" 
				type="number"
				name="newSmurfRecruitAge"
				placeholder="Smurf Age"
				value={newSmurfRecruitAge}
				min="0"
				max="300"
				onChange={handleChangeOnAge}
			/>
			<input 
				className="smurf-input" 
				type="text"
				name="newSmurfRecruitHeight"
				placeholder="Smurf Height"
				value={newSmurfRecruitHeight}
				onChange={handleChangeOnHeight}
			/>
			<button className="smurf-button" onClick={handleClick}>ADD TO SMURF VILLAGE</button>
		</div>

	)
}

const mapStateToProps = (state) => {}

export default connect(mapStateToProps, { postSmurf })(SmurfForm);