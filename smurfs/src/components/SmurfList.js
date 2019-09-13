import React, { useContext } from 'react';
import { SmurfContext } from '../contexts/SmurfContext.js'

import SmurfCard from './SmurfCard.js'

const SmurfList = () => {
    const { smurfs } = useContext(SmurfContext);

    return(
        <div className='smurf-list'>
            {smurfs.map(smurf => 
                <SmurfCard
                    key={smurf.id}
                    smurf={smurf}
                />
            )}
        </div>
    )
}

export default SmurfList;