import React from 'react'
import { findByLabelText } from '@testing-library/dom';
import './smurf.css';

function Smurf(props) {
  return (
    <div className="smurf">
      <h2 style={{textAlign:'cener'}}>Name: {props.smurf.name}</h2>
      <p style={{textAlign:'center'}}>Age: {props.smurf.age}</p>
      <p style={{textAlign:'center'}}>Height: {props.smurf.height}</p>
    </div>
  )
}

export default Smurf
