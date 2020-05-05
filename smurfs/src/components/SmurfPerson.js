import React from 'react'

export default function SmurfPerson(props) {
    //console.log(props);
    return (
        <div>
            <h3 key={props.smurf.id}>{`NAME: ${props.smurf.name}, AGE: ${props.smurf.age}, HEIGHT: ${props.smurf.height}`}</h3>
           
        </div>
    )
}
