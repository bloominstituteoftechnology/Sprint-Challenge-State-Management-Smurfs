import React from 'react'

export default function Smurf(props) {
    return (
        <div>
            <h3>{props.smurf.name} </h3>
            <ul>
                <li>
                    <p>{props.smurf.age} </p>
                </li>

                <li>
                    <p>{props.smurf.height} </p>
                </li>
            </ul>
        </div>
    )
}
