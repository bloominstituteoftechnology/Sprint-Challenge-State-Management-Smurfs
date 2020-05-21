import React, { useContext } from 'react';
import SmurfContext from '../contexts/SmurfContext.js';


const SmurfsList = () => {
const smurfs  = useContext(SmurfContext);

	return (
		<div className="smurfs-container">
            {smurfs.map(smurf => (
                <div className='smurfCard'>
                    <h3 key={smurf.id} >My name is {smurf.name}, I'm {smurf.height} cm in height and I have {smurf.age} years.</h3>
                </div>
            ))}
            
		</div>
	);
};

export default SmurfsList;