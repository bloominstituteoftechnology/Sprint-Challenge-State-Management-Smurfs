import React from 'react';

//import smurf card
import SmurfCard from './SmurfCard';


const SmurfList = (smurfs) => {
    return(
        <div>
            {smurfs.map(smurfs => <SmurfCard key{...smurfs.id} smurf{...smurfs} />)}
        </div>
    )
}

export default SmurfList;