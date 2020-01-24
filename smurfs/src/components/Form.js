import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from './../actions';

const mapStateToProps = state => {
	return {
		name: state.village.name,
		age: state.village.age,
		height: state.village.height,
		village: state.village
	};
};

const Form = props => {
	const [smurf, setSmurf] = useState({
		name: '',
		age: '',
		height: '',
		id: Date.now()
	});

	const handleName = e => {
		setSmurf({
			...smurf,
			name: e.target.value
		});
	};

	const handleAge = e => {
		setSmurf({
			...smurf,
			age: e.target.value
		});
	};

	const handleHeight = e => {
		setSmurf({
			...smurf,
			height: e.target.value
		});
	};

	const add = e => {
		e.preventDefault();
		console.log('please', smurf);
		props.addSmurf(smurf);
	};

	return (
		<div>
			<form>
				<input
					type='text'
					name='name'
					value={smurf.name}
					onChange={handleName}
				/>
				<input type='text' name='age' value={smurf.age} onChange={handleAge} />
				<input
					type='text'
					name='height'
					value={smurf.height}
					onChange={handleHeight}
				/>
				<button onClick={add}>Create Smurf</button>
			</form>
		</div>
	);
};

export default connect(mapStateToProps, { addSmurf })(Form);
