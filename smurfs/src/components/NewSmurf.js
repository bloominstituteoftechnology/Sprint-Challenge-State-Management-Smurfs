import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createSmurf } from '../actions';

const emptyFormValues = {
	name: '',
	age: '',
	height: ''
};

export default function NewSmurf(props) {
	const [ formValues, setFormValues ] = useState({ ...emptyFormValues });
	const dispatch = useDispatch();

	const changeHandler = (event) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value
		});
	};

	const submitHandler = (event) => {
		event.preventDefault();

		dispatch(createSmurf(formValues));
		// reset form values back to empty
		setFormValues({ ...emptyFormValues });
	};

	return (
		<div className="new-smurf">
			<form onSubmit={submitHandler}>
				<div>
					<label>Name</label>
					<input type="text" placeholder="Enter name..." name="name" onChange={changeHandler} />
				</div>
				<div>
					<label>Age</label>
					<input type="number" placeholder="Enter age..." name="age" onChange={changeHandler} />
				</div>
				<div>
					<label>Height</label>
					<input type="text" placeholder="Enter height..." name="height" onChange={changeHandler} />
				</div>
				<button type="submit">Create New Smurf</button>
			</form>
		</div>
	);
}
