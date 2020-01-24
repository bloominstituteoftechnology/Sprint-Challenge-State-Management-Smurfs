import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from './../actions';

const mapStateToProps = state => {
	return {
		name: state.village.name,
		age: state.village.age,
		height: state.village.height,
		village: state.village
	};
};

const Smurfs = props => {
	const [smurf, setSmurf] = useState({
		name: '',
		age: '',
		height: ''
	});

	console.log('LAST', smurf);

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

	return (
		<div>
			<h1>Smurfs Village</h1>
			<h3>{props.name}</h3>
			<h3>{props.age}</h3>
			<h3>{props.height}</h3>
			<button>Put Village on Fire</button>
			<button onClick={props.fetchSmurfs}>Enter Village</button>

			<form>
				{console.log('inside form')}
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
				<h1 onClick={props.addSmurf(smurf)}>Create Smurf</h1>
			</form>
		</div>
	);
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(Smurfs);
