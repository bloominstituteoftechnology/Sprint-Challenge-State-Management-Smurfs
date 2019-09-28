import React from 'react'
import { useSelector } from 'react-redux'

import Smurf from './Smurf'

export default function SmurfList() {
    const {smurfs, fetching} = useSelector(state => ({ ...state }))
    
    return (
        <div>
            { (fetching) 
                ? 'Loading village...'
                : smurfs.map(function renderSmurf(smurf) {
                    return <Smurf key={smurf.id} {...smurf} />
                })
            }
        </div>
    )
}