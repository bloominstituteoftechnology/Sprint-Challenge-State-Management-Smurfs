import React from 'react'
import { findByLabelText } from '@testing-library/dom';

function Smurf(props) {
  return (
    <div style={{textAlign:'center', boxShadow: "5px 5px 5px rgba(0,0,0,0.65)", width: "450px", padding: '15px'}}>
      <h2 style={{textAlign:'cener'}}>Name: {props.smurf.name}</h2>
      <p style={{textAlign:'center'}}>Age: {props.smurf.age}</p>
      <p style={{textAlign:'center'}}>Height: {props.smurf.height}</p>
    </div>
  )
}

export default Smurf
