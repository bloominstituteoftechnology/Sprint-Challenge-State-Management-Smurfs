import React from 'react'
import { useSelector } from 'react-redux'

import Smurf from './Smurf'

export default function SmurfList() {
    const smurfs = useSelector(state => state.smurfs)
    
    return (
        <div>
            {smurfs.map(function renderSmurf(smurf) {
                return <Smurf key={smurf.id} {...smurf} />
            })}
        </div>
    )
}