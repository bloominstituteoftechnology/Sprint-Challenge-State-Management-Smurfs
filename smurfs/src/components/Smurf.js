import React from 'react';

let Smurf = props => {
    let {
        name,
        age,
        height
    } = props

    return (
        <>
        <h3>Name: {name}</h3>
        <h3>Age: {age}cm</h3>
        <h3>height: {height}</h3>
        </>
    )
}

export default Smurf;