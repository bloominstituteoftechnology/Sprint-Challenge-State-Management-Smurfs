import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSmurf } from '../actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
	root: {
		margin: '0 auto',
		padding: '10px',
		width: '30vw',
		textAlign: 'center'
	},
	input: {
		margin: '5px'
	}
});

const emptyFormValues = {
	name: '',
	age: '',
	height: ''
};

export default function NewSmurf(props) {
	const [ formValues, setFormValues ] = useState({ ...emptyFormValues });
	const dispatch = useDispatch();
	const style = useStyle();
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
		<div className={style.root}>
			<form onSubmit={submitHandler}>
				<div>
					<TextField
						className={style.input}
						label="Name"
						type="text"
						placeholder="Enter name..."
						value={formValues.name}
						name="name"
						onChange={changeHandler}
						// variant="outlined"
					/>
				</div>
				<div>
					<TextField
						className={style.input}
						label="Age"
						type="number"
						placeholder="Enter age..."
						value={formValues.age}
						name="age"
						onChange={changeHandler}
						// variant="outlined"
					/>
				</div>
				<div>
					<TextField
						className={style.input}
						label="Height"
						type="text"
						placeholder="Enter height..."
						value={formValues.height}
						name="height"
						onChange={changeHandler}
						// variant="outlined"
					/>
				</div>

				<Button type="submit" variant="contained" color="primary" size="small">
					Create New Smurf
				</Button>
			</form>
		</div>
	);
}
