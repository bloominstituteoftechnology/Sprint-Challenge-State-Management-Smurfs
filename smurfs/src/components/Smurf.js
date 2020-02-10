import React, { useContext } from 'react';
import axios from 'axios';
import { SmurfContext } from '../context/SmurfContext';

const Smurf = ({ blue }) => {
    
    const { smurfs, setSmurfs } =useContext(SmurfContext);

    console.log('smurf.js > passed prop blue:', blue);

    const handleDelete = id => {
        axios
            .delete(`http://localhost:3333/smurfs/${id}`)
            .then(res => setSmurfs(smurfs.filter(blue2 => blue2.id !== id)))
    }

    return (
        <div>
            <h2>{blue.name}</h2>
            <p>{blue.age}</p>
            <p>{blue.height}</p>
            <button onClick={() => handleDelete(blue.id)}>Delete</button>
        </div>
    )
}
export default Smurf;