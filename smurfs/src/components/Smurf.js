import React, {useContext,useState} from 'react'
import { SmurfContext } from "../context"

import { findByLabelText } from '@testing-library/dom';
import './smurf.css';

function Smurf(props) {
  const smurfee = useContext(SmurfContext);
  const [singleSmurf, setSingleSmurf] = useState({name:"", age:"", height:""});
  const [edit, setEdit] = useState(false);
  const handleInput = (event) => {
     setSingleSmurf({...singleSmurf, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event) => {
     event.preventDefault();
     setEdit(false);
     smurfee.updateSmurf({...singleSmurf, id: props.smurf.id});
     setSingleSmurf({name:"", age:"", height:""});
  }
  if(edit) {
    return(
      <div className="smurf form">
      <form onSubmit={handleSubmit}>
       Name: <input type="text"
                    className="update-form"
                    name="name" 
                    value={singleSmurf.name}
                    placeholder={props.smurf.name} 
                    onChange={handleInput} /><br />
       Age:  <input type="text"
                    name="age" 
                    className="update-form"
                    value={singleSmurf.age}  
                    placeholder={props.smurf.age} 
                    onChange={handleInput} /><br />
      Height:<input type="text" 
                    name="height"
                    className="update-form"  
                    value={singleSmurf.height} 
                    placeholder={props.smurf.height} 
                    onChange={handleInput} /><br />
      <button className="submit" type="submit">Update Smurf</button> 
    </form>
    </div>
    )
  }
  return (     
    <div className="smurf">
      <div className="smurf-modify">        
        <button onClick={() => setEdit(true)}>Update</button>
        <button onClick={() => smurfee.deleteSmurf(props.smurf)}>Delete</button>
      </div>
      <div>     
        <h2 style={{textAlign:'cener'}}>Name: {props.smurf.name}</h2>
        <p style={{textAlign:'center'}}>Age: {props.smurf.age}</p>
        <p style={{textAlign:'center'}}>Height: {props.smurf.height}</p>
      </div>
    </div>
  )
}

export default Smurf
