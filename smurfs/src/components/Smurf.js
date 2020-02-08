import React from 'react'

import './css/Smurf.css'

const Smurf = ({ name, age, height }) => {
  return (
    <div className="smurf-text">
      <p>{name}</p>
      <p>{age}</p>
      <p>{height}</p>
    </div>
  )
}

export default Smurf
