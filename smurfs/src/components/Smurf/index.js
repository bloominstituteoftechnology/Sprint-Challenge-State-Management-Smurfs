import React, { useContext } from 'react';
import { SmurfContext } from '../../contexts';

import Block from './Block';

const Smurf = ({id}) => {

    const context = useContext(SmurfContext);
    
    console.log('Smurf: data -> ', context);

    if (context.smurfs.length > 0) {
        const smurf = context.smurfs.filter(s => s.id === id)[0];

        return (
            <Smurf.Block>   
                <h2>{smurf.name}</h2>
                <p><strong>Age:</strong> {smurf.age}</p>
                <p><strong>Height:</strong> {smurf.height}</p>
            </Smurf.Block>
        );
    }
    
    return (
        <div>Loading...</div>
    );

}

Smurf.Block = Block;

export default Smurf;