import React from 'react';

const Smurf = (props) => {
    const { name, age, height, id } = props.props;

    return (
        <>
            <h3>{name}</h3>
            <h4>{age}</h4>
            <h4>{height}</h4>
            <button onClick={() => props.dispatch({ type: "DELETE_SMURF", payload: id })}>X</button>
        </>
    )
}

export default Smurf;