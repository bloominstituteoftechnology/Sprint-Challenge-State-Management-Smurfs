import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

const Smurfs = () => {
    const { smurfs } = useContext(SmurfContext);

    console.log("this is my data: ", smurfs);


    return (
        <div>
            {smurfs.forEach(smurf => {
                console.log("this is my data 2", smurf)
                return (
                    <span>
                        <p>Name: {smurf.name} Height: {smurf.height} Age: {smurf.age}</p>
                    </span>
                )
            })}
        </div>
    )
}

export default Smurfs;