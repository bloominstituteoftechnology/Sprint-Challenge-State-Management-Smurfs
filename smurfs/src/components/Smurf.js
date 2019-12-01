import React, { useState } from 'react'
import { connect } from 'react-redux';


import { editSmurf, deleteSmurf } from '../actions'

const Smurf = (props) => {

  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: '',
    id: null
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted!')

    setSmurf({
      name: '',
      age: '',
      height: '',
      id: null
    })
  }


  console.log('Edit-props', props)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{props.smurf.name}</h2>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
        <div>
          <button onClick={() => props.editSmurf(props.smurf.id)}>
            Edit
          </button>
          <button onClick={() => props.deleteSmurf(props.smurf.id)}>
            Delete
          </button>
        </div>
        {props.isEditing && (
          <>
          <input name="name"/> 
          <input name="age" /> 
          <input name="height" /> 
          </>
        )}
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isEditing: state.isEditing,
    error: state.error,
    
  }
}

export default connect(mapStateToProps, { editSmurf, deleteSmurf })(Smurf)
