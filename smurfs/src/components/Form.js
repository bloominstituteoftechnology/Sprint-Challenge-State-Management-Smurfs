import React, { useState, useContext } from 'react';
import { SmurfContext } from '../context/context';

const Form = () => {
	const [ addNew, setNew ] = useState({
		name: '',
		age: '',
		height: ''
	});
	const { Add } = useContext(SmurfContext);

	const handleChange = event => {
		setNew({ ...addNew, [event.target.name]: event.target.value });
	};

	const handleSubmit = () => {
		Add(addNew);
	};

	return (
		<div className="SmurfForm">
			<h2>Add a new smurf</h2>
			<form onSubmit={event => handleSubmit(event)}>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={addNew.name}
					onChange={event => handleChange(event)}
				/>
				<input
					type="number"
					name="age"
					placeholder="age"
					value={addNew.age}
					onChange={event => handleChange(event)}
				/>
				<input
					type="text"
					name="height"
					placeholder="height"
					value={addNew.height}
					onChange={event => handleChange(event)}
				/>
				<button>Add Smurf</button>
			</form>
		</div>
	);
};

export default Form;