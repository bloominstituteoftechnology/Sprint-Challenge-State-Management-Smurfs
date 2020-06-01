import React, { useContext } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';

const Smurfs = () => {
    const {smurfs} = useContext(SmurfsContext);

    return (
        <div>
            {smurfs.map(s => (
                <div key={s.name} className='smurf'>
                    <p>Name: {s.name}</p>
                    <p>Age: {s.age} years old</p>
                    <p>Height: {s.height}</p>
                </div>
            ))}
        </div>
    )
}

export default Smurfs;