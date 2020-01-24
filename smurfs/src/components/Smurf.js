import React from 'react';

function Smurf (props){

    return (
        <div>
            <p>SMURF: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default Smurf;