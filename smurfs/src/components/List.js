import React, { useContext } from 'react';
import { SmurfContext } from '../context/context';

import Smurf from './Smurf';

const List = props => {
	const { smurfs, Remove } = useContext(SmurfContext);

	return (
		<div className="SmurfsList">
			{smurfs && smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} Remove={Remove} />)}
		</div>
	);
};

export default List;