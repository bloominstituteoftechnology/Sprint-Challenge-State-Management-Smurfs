import React, { useContext } from 'react';
import { sContext } from '../contexts';
import Scard from './Scard';
import { nanoid } from 'nanoid'

const Slist = () => {
    //grab context
    const { smurfs, sVals, killSmurf } = useContext(sContext)
    //map context data to cards
    return (<>
        <h3>Smurf List</h3>
        { smurfs.map(smurf => <Scard key={nanoid()} kill={killSmurf} {...smurf} />) }
    </>);

};

export default Slist;