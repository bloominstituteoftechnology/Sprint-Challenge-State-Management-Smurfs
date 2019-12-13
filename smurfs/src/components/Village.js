import React from 'react'
import { Smurf } from './Smurf'

export const Village = props => {
    return (
        <div>
            {props.village.map(smurf => (
                <Smurf key={Date.now()} smurf={smurf}/>
            ))}
        </div>
    )
}