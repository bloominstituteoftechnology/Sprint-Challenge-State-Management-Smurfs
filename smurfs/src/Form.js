import React, { useState } from 'react';
import  postSmurfs  from './actions/actionreducer';
import { connect } from 'react-redux';

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
		<div className="work">
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
		</div>
	);
};


const mapDispatchToProps = {
	postSmurfs
};

export default connect(null, mapDispatchToProps)(Form);
