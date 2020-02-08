import React from 'react';
import { connect } from 'react-redux';

import { getSmurf } from '../actions';

const SmurfList = props => {
 
  return (
    <>
     <button onClick={props.getSmurf}>Get Smurf</button>    
      {props.smurf.map(smurf => (
        <div>name:{smurf.name} Age:{smurf.age} Height:{smurf.height}</div>
      ))}   
     </>
  );
}

const mapStateToProps = state => {
  return ({
    smurf: state.smurf,
    error: state.error
  })
}

export default connect(
  mapStateToProps,
  { getSmurf }
) (SmurfList);