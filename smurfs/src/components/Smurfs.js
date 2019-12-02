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
      <div>
        <div>
          {props.error && <div style={{ color: 'red' }}>{props.error}</div>}
        </div>

        {props.isLoading ? (
          <div>Loading...</div>
          ) : (
            props.smurfs.map( (smurf, index) => {
              return (
                <Smurf key={index} smurf={smurf}  />
              )
            })
          )
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isLoading: state.isLoading,
    // toggleEdit: state.toggleEdit,
    // isEditing: state.isEditing
  }
}

export default connect(mapStateToProps, { getSmurfs })(Smurfs)
