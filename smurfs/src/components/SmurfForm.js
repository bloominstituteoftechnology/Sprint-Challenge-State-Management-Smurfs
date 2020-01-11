import React, {useState} from 'react';
import {connect} from 'react-redux'; 
import {postSmurfs} from '../actions/smurfActions';

const SmurfForm = ({ postSmurfs }) => {
	const [smurf, setSmurf] = useState({
		name: '',
        age: '',
        height: ''
   	});

	const handleChanges = (event) => {
		setSmurf({ ...smurf, [event.target.name]: event.target.value});
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
		const newSmurf = {
			...smurf,
			Id: Date.now()
		}
		postSmurfs(newSmurf);
		setSmurf({
			name: '',
			age: '',
			height: ''
		})
    };

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
				type='text'
				name='name'
				placeholder='Name'
				value={smurf.name}
				onChange={handleChanges}
				/>
				<input
				type='text'
				name='age'
				placeholder='Age'
				value={smurf.age}
				onChange={handleChanges}
				/>
				<input
				type='text'
				name='height'
				placeholder='Height'
				value={smurf.height}
				onChange={handleChanges}
				/>
				<button type='submit'>Add Smurf</button>
			</form>
		</div>
	)
};

const mapStateToProps = state => {
	// console.log('form: ', state)  //test
	return {
		smurfs: state.smurfs,
		isGetting: state.isGetting
	}
};

export default connect(mapStateToProps , { postSmurfs })(SmurfForm);