import React, { useContext } from 'react';
import SmurfContext from '../context/SmurfContext';
import Smurf from './Smurf';

export default function Smurfs () {
    const {smurfs} = useContext(SmurfContext)
    return(
        <div>
            {smurfs.map(smurf=>(
                <Smurf key ={smurf.id} smurf ={smurf}/>
            ))}
        </div>
    )
}