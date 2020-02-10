import React, { useContext } from 'react';
import Smurf from './Smurf';
import { SmurfContext } from '../context/SmurfContext';

const SmurfList = () => {

    const { smurfs } = useContext(SmurfContext);

    console.log('setSmurf > SmurfList:', smurfs);

    return (
        <div>
            {smurfs.map(blue => {
                return <Smurf key={blue.id} blue={blue} />
            })}
        </div>
    )
}
export default SmurfList;
