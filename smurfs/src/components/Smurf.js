import React from 'react'

export default function Smurf(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Height: {props.height}</p>
        </div>
    )
}