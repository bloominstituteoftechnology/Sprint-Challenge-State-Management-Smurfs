import React, { useContext } from 'react';
import { SmurfContext } from '../context/smurfcontext';
// import Smurf from './smurf'


const SmurfList = () =>{    
    
    const smurfs = useContext(SmurfContext);

    return (
        <div className="smurf-list">
            <>
            {smurfs.map(char => (
                <h3 key ={char.key}>Hey There! My name is {char.name}, I am {char.age} years old and I am only {char.height} tal!</h3>
            ))}            
            </>

        </div>
    );
};

export default SmurfList;