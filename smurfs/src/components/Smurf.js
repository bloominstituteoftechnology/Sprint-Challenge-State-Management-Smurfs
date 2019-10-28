import React, {useContext} from 'react'
import { SmurfContext } from "../context"
import { findByLabelText } from '@testing-library/dom';
import './smurf.css';

function Smurf(props) {
  const smurfee = useContext(SmurfContext);
  return (
    <div className="smurf">
      <div className="smurf-modify">        
        <button>Update</button>
        <button onClick={() => smurfee.deleteSmurf(props.smurf)}>Delete</button>
      </div>
      <h2 style={{textAlign:'cener'}}>Name: {props.smurf.name}</h2>
      <p style={{textAlign:'center'}}>Age: {props.smurf.age}</p>
      <p style={{textAlign:'center'}}>Height: {props.smurf.height}</p>
    </div>
  )
}

export default Smurf
