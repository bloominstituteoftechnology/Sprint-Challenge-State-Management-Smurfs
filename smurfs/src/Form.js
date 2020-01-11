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
		<div className="work">
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="Name" value={newSmurf.name} onChange={handleChanges} />
				<br />
				<input type="text" name="age" placeholder="Age" value={newSmurf.age} onChange={handleChanges} />
				<br />
				<input
					type="text"
					name="height"
					placeholder="Height"
					value={newSmurf.height}
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
function mapStateToProps(state) {
	return {
		smurf: state.title
	};
}

const mapDispatchToProps = {
	postSmurfs
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
