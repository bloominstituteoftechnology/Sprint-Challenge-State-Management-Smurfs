import React from 'react'

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

const Smurfs = (props) => {
  console.log(props)
  return (
    <div>
      <SmurfForm />
      <button onClick={() => props.getSmurfs()}>Get Smurfs</button>
      {props.smurfs.map( (smurf, index) => {
        return (
          <Smurf key={index} smurf={smurf} />
        )
      })}

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs)
