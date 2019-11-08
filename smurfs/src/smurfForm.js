
import { connect } from "react-redux";
import React, { useState } from 'react';
import {postSmurf} from "./smurfAction";




function SmurfForm (props) {
    console.log(props);
    const [smurfs, setSmurfs] = useState({
        id: props.smurfs[props.smurfs.length -1],
        name: '',
        age: '',
        height: ''
    })

    const handleChange = e => setSmurfs({...smurfs, [e.target.name]: e.target.value});

    const handleSubmit = async e => {
        e.preventDefault();
        await props.postSmurf(smurfs);
        props.history.push('/');
    }


  return (
    <div>
    <form onSubmit={handleSubmit}>
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
      height: state.height
    };
  };

  const mapDispatchToProps = {postSmurf}
  
  export default connect(mapStateToProps, mapDispatchToProps)(SmurfForm);


