import React, { useContext } from 'react';

import { Smurf } from './Smurf';

import { SmurfContext } from '../context/SmurfContext';

export const SmurfList = () => {

    const [ smurfs ] = useContext(SmurfContext);
    console.log('setSmurf > SmurfList:', smurfs);

    return(
        <div>
            {smurfs.map( smurf => {
                return <Smurf key={smurfs.id} smurf={smurf} />
            })}
        </div>
    )
}