import React from 'react'

const Smurf = (props) => {

  const handleEdit = (smurfId) => {
    console.log(smurfId)
  }
  
  const handleDelete = (smurfId) => {
    console.log(smurfId)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted!')
  }


  console.log('Edit-props', props)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{props.smurf.name}</h2>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
        <div>
          <button onClick={(e) => handleEdit(props.smurf.id)} >Edit</button>
          <button onClick={() => handleDelete(props.smurf.id)}>Delete</button>
        </div>
      </form>
    </div>
  )
}

export default Smurf
