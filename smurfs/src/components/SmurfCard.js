import React from 'react';

const SmurfCard = (props) => {
    return (
        <div className="smurf">
            <h1>Name: {props.data.name} Smurf</h1>
            <h2>Age: {props.data.age}</h2>
            <h2>Height: {props.data.height}</h2>
        </div>
    )
}

export default SmurfCard;