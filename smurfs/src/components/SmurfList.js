import React, { useContext } from 'react';

import Smurf from './Smurf';
import AddSmurf from './addSmurfForm';

import { SmurfContext } from '../contexts/SmurfContext';

const SmurfList = () => {
    const { smurfState, dispatch } = useContext(SmurfContext);

    console.log("smurfState in SmurfList: ", smurfState);
    
    return (
        <>
            {smurfState.map((smurf, index) => {
                return <Smurf key={index} props={smurf} dispatch={dispatch} />
            })}
            <AddSmurf />
        </>
    )
}

export default SmurfList;