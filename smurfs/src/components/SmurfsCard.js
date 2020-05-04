import React from 'react'
import RemoveSmurf from './RemoveSmurf'

const SmurfsCard = ({ name, age, height, id}) => {
    return (
        <div className='smurf-card'>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{height}</h3>
            <RemoveSmurf id={id}/>
        </div>
    )
}

export default SmurfsCard;