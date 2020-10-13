import React, { useState } from 'react';
import {postSmurfs} from './actions';
import { connect } from 'react-redux';




const SmurfForm = (props) => {
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

	const handleSubmit = (e) => {
		e.preventDefault();
		setNewSmurf({
			name: '',
			age: '',
			height: ''
		})
		props.postSmurfs(newSmurf);

	};

	return (
		<div className='container'>
		<div className="work">
			<h1>Add a Smurf:</h1>
			<form onSubmit={handleSubmit}>

				<input type="text" name="name" placeholder="Name" value={newSmurf.name} onChange={handleChanges} />
				<br />

				<input type="number" name="age" placeholder="Age" value={newSmurf.age} onChange={handleChanges} />
				<br />

				<input type="text" name="height" placeholder="Height" value={newSmurf.height} onChange={handleChanges} />
				<br />
				<button>Add</button>
			</form>
		</div>
		</div>
	);
};
function mapStateToProps(state) {
	return {
		smurf: state.smurf
	};
}

const mapDispatchToProps = {
	postSmurfs
};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);
