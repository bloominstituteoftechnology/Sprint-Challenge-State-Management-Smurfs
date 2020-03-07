import React, {useContext} from 'react';



const SmurfCard = () =>

    return(
        <div className='smurf-card'>
            <h1>{data.name}</h1>
            <p>{data.age}</p>
            <p>{data.height}</p>
        </div>
    );
};

export default SmurfCard;