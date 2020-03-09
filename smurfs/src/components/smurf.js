import React from 'react';
import axios from 'axios';



function smurf(props) {
    function deleteSmurf(id) {
    console.log(props)
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res=>{
            // Bring function that sets the smurf list and pass
            // res.data as a value
            console.log(res.data)
        })
        
    }
   console.log(props)                     

    return (
        <div className="smurf-item">
      <h3>Name: {props.each.name}</h3>
      <p>Age: {props.each.age}</p>
      <p>Height: {props.each.height}</p>
      <div>
          <button onClick={()=>{deleteSmurf(props.each.id)}} 
          className = 'btnDiv' type = 'delete'>Delete</button>
      </div>
      </div>
    )
}

export default smurf;