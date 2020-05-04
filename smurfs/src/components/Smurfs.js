import React, { useState, useContext } from 'react'
import SmurfsCard from './SmurfsCard'
import { SmurfsContext } from './SmurfsContext'

export const Smurfs = () => {
    const [smurfs, setSmurfs] = useContext(SmurfsContext)
    return (
        <div className='smurf-box'>
            {smurfs.map(smurfs => (
                <SmurfsCard name={smurfs.name} age={smurfs.age} height={smurfs.height} id={smurfs.id} key={smurfs.id} />
            ))}
        </div>
    )
}