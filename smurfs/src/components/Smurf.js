import React, { useContext } from 'react';
import axios from 'axios';

import { SmurfContext } from '../context/SmurfContext';

export const Smurf = (prop) => {
    
    const [smurfs, setSmurfs] = useContext(SmurfContext)

    console.log('smurf.js > passed prop data:', prop);

    const handleDelete = id => {
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(res => {
                setSmurfs(smurfs.filter(smurf => smurf.id !== id))
            })
    }

    return(
        <div>
            <h3>Name: {prop.smurf.name}</h3>
            <p>Age: {prop.smurf.age}</p>
            <p>Height: {prop.smurf.height}</p>
            <button onClick={() => handleDelete(prop.smurf.id)}>Delete</button>
        </div>
    )
}