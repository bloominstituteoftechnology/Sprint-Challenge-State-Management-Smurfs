import React from 'react'
import Smurf from './Smurf';

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <Smurf id={smurf.id} name={smurf.name} age={smurf.age}/>
                )
            })}
        </div>
    )
}

export default SmurfList
