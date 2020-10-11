import React, { useState } from 'react';
import { postSmurfs } from './actions/actionreducer';
import { connect } from 'react-redux';




const Form = (props) => {
	const [ newSmurf, setNewSmurf ] = useState('');

	const handleChanges = (e) => {
		setNewSmurf({
			...newSmurf,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postSmurfs(newSmurf);
		setNewSmurf();
	};

	return (
		<div className='container'>
		<div className="work">
			<h1>Add a Smurf:</h1>
			<form onSubmit={handleSubmit}>

				<input type="text" name="name" placeholder="Name" onClick={handleChanges} />
				<br />

				<input type="number" name="age" placeholder="Age" onClick={handleChanges} />
				<br />

				<input type="text" name="height" placeholder="Height" onClick={handleChanges} />
				<br />
				<button>Add</button>
			</form>
		</div>
		</div>
	);
};
function mapStateToProps(state) {
	return {
		smurf: state.title
	};
}

const mapDispatchToProps = {
	postSmurfs
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
