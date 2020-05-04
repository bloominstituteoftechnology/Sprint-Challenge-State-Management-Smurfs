import React from 'react'

const SmurfsCard = ({ name, age, height, id}) => {
    console.log(id)
    return (
        <div className='smurf-card'>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{height}</h3>
        </div>
    )
}

export default SmurfsCard;