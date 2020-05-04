import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Smurf from './Smurf';
import { fetchSmurfs } from '../actions';

export default function Smurfs() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSmurfs());
    }, [dispatch]);

    const smurfs = useSelector(state => state.smurfs);

    return (
        <div className="smurfs">
            {smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)}
        </div>
    )
}