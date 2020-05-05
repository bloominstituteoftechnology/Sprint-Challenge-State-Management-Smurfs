import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const Smurfs = (props) => {

    const { fetchData } = useContext(SmurfContext);
    
    return (
        <div>
            {
                props.smurfs.map(smurf => (
                    <span key={smurf.id}>
                        <p>Name: {smurf.name} Height: {smurf.height} Age: {smurf.age}</p>
                    </span>
                ))
            }
        </div>
    )
}

export default Smurfs;