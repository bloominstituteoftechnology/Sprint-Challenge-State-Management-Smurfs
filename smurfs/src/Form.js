import React, { useState } from 'react';
import  postSmurfs  from './actions/actionreducer';
import { connect } from 'react-redux';
import styled from 'styled-components'

const Div = styled.div`
/* display: flex; */
padding: 20px;
flex-wrap: wrap;
justify-content: space-evenly;
`

const Form = (props) => {
	const [ newSmurf, setNewSmurf ] = useState({
		name: '',
		age: '',
		height: ''
	});

	const handleChanges = (e) => {
		setNewSmurf({
			...newSmurf,
			[e.target.name]: e.target.value
		});
	};
	const resetForm = () => {
		setNewSmurf(newSmurf)
	}

	const handleSubmit = (e) => {
		props.postSmurfs(newSmurf);
		resetForm()
	};
	
	return (
		<Div>
			<h3>Please add a smurf to the village!</h3>
			<form onSubmit={handleSubmit}>
				<input 
				type="text" 
				name="name" 
				placeholder="Name" 
				
				onChange={handleChanges} 
				/>
				<br />
				<input 
				type="text" 
				name="age" 
				placeholder="Age" 
				 
				onChange={handleChanges} 
				/>
				<br />
				<input
					type="text"
					name="height"
					placeholder="Height"

					onChange={handleChanges}
				/>
				<br />
				<button type="submit" onClick={handleSubmit}>
					Add
				</button>
			</form>
		</Div>
	);
};


const mapDispatchToProps = {
	postSmurfs
};

export default connect(null, mapDispatchToProps)(Form);
