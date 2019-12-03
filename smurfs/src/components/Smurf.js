import React, { useState } from 'react'
import { connect } from 'react-redux';


import { editSmurf, deleteSmurf } from '../actions'

const Smurf = (props) => {

  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: ''
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    
    props.editSmurf({
      [e.target.name]: e.target.value
    })
    setSmurf({
      name: '',
      age: '',
      height: '',
    })
  }

  const handleEditChange = (smurfId) => {

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
          <button onClick={() => {props.deleteSmurf(props.smurf.id)}}>
            Delete
          </button>
        </div>
        {props.toggleEdit && (
          <>
          <h1>Editing {props.smurf.name}</h1>
          <input type="text" name="name" placeholder="name" onChange={handleEditChange} />
          <input type="text" name="age" placeholder="age" onChange={handleEditChange} />
          <input type="text" name="height" placeholder="height" onChange={handleEditChange} />

          <button onClick={() => {handleSubmit(props.smurf.id)}}>Submit</button>
          </>
        )}
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isEditing: state.isEditing,
    toggleEdit: state.toggleEdit,
    error: state.error,
  }
}

export default connect(mapStateToProps, { editSmurf, deleteSmurf })(Smurf)
