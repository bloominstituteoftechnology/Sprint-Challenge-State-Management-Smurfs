import React, { useContext } from 'react'
import { SmurfContext } from "../contexts/SmurfContext.js";


const smurf = useContext(SmurfContext);

function Smurf() {
    return (
        <div>
        <SmurfContext.Consumer>
            <h1>{`Hi my name is ${smurf.name}`}</h1>
            <p>{`I am ${smurf.age} years old.`}</p>
            <p>{`I am ${smurf.height} tall.`}</p>
        </SmurfContext.Consumer>
        </div>
    )
}

export default Smurf;
