import React from 'react';

export const Smurf = props => {
    return (
        <div>
            <h3>{props.smurf.name}</h3>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}