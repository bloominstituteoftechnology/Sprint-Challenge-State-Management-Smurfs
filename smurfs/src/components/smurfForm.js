
import { connect } from "react-redux";
import React, { useState } from 'react';
import {fetchSmurfs, postSmurf, updateSmurf} from "./smurfAction";



function SmurfForm (props) {
    console.log(props);
    const [smurfs, setSmurfs] = useState([{
        id: props.smurfs[props.smurfs.length -1],
        name: '',
        age: '',
        height: ''
    }])

    const handleChange = e => setSmurfs({...smurfs, [e.target.name]: e.target.value});

    const handleSubmit = e => {
         props.postSmurf(smurfs);
    }


  return (
    <div className = 'smurf-form'>
    <form onSubmit={handleSubmit}>
        <h1>Join Our Village!</h1>
        <label>Name</label>
        <input type='text' name='name' onChange={handleChange} value={smurfs.name} />
        <label>Age</label>
        <input type='text' name='age' onChange={handleChange} value={smurfs.age} />
      
        <label>Height</label>
        <input type='text' name='height' onChange={handleChange} value={smurfs.height} />
        <button type='submit'>Submit</button>
    </form>
    </div>
)
}





const mapStateToProps = state => {
    return {
      smurfs: [...state.smurfs],
      id: state.id,
      name: state.name,
      height: state.height,
      age: state.age
    };
  };

  const mapDispatchToProps = {fetchSmurfs, postSmurf, updateSmurf}
  
  export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);


