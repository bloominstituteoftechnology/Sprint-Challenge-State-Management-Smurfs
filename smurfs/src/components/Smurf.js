import React from 'react';

function Smurf (props){

    return (
        <div className="smurf-card">
            <p className="title">SMURF: {props.smurf.name}</p>
            <p className="title">Age: {props.smurf.age}</p>
            <p className="title">Height: {props.smurf.height}</p>
        </div>
    )
}

export default Smurf;