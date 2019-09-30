import React from 'react';

const SmurfCard = (smurfs) => {
    return(
        <div>
            <p>Name: {smurfs.name}</p>
            <p>Age: {smurfs.age}</p>
            <p>Height: {smurfs.height}</p>
        </div>
    )
}

export default SmurfCard;