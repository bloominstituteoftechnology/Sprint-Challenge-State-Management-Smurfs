import React from 'react'

const Smurf = props => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>{props.age} years old</p>
        </div>
    )
}

export default Smurf
