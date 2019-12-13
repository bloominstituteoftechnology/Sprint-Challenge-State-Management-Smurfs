import React, { useState, useContext } from 'react';
import { SmurfContext } from '../context/context';

const Form = () => {
	const [ addNew, setNew ] = useState({
		name: '',
		age: '',
		height: ''
	});
	const { Add } = useContext(SmurfContext);

	const handleChange = e => {
		setNew({ ...addNew, [e.target.name]: e.target.value });
	};

	const handleSubmit = () => {
		Add(addNew);
	};

	return (
		<div >
			<h2>Add a new smurf</h2>
			<form className="List" onSubmit={e => handleSubmit(e)}>
				<input
					type="text"
                    placeholder="name"
                    name="name"
					value={addNew.name}
					onChange={e => handleChange(e)}
				/>
                <input
                    type="text"
                    placeholder="height"
					name="height"
					value={addNew.height}
					onChange={e => handleChange(e)}
				/>
				<input
                    type="number"
                    placeholder="age"
					name="age"
					value={addNew.age}
					onChange={e => handleChange(e)}
				/>

				<button>Add Smurf</button>
			</form>
		</div>
	);
};

export default Form;