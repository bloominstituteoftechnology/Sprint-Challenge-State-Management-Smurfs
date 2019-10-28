import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {addSmurf, getSmurfs} from '../store/actions/index';
import uuid from 'react-uuid';
const Form = props => {

const [smurf, setSmurf] = useState({name:'', age:'', height:''});
const handleChange = event => {
        setSmurf({...smurf, [event.target.name]: event.target.value});
    };

useEffect(() => {
        getSmurfs();
    },[]);


const FormSubmit = event =>{
    event.preventDefault();

    const newSmurf = {
        ...smurf, 
        id: Date.now()
    };
    props.addSmurf(newSmurf);
    setSmurf({name:'', age:'', height:''})
};

 
return (

    <form onSubmit={FormSubmit} className='villageForm'>

    <label>New Smurf: </label>

    <input
      type="text"
      name="name"
      placeholder="Add Smurf"
      value={smurf.name}
      onChange={handleChange}
    />

    <label>Smurf Age: </label>
    <input
      type="number"
      name="age"
      placeholder="Smurfs Age"
      value={smurf.age}
      onChange={handleChange}
    />

    <label>Smurf Height: </label>
      <input
        type="text"
        name="height"
        placeholder="Sumurfs Height"
        value={smurf.height} 
        onChange={handleChange}
      />
    
    
    <button type="submit">Add Smurf</button>

  </form>
);
};

const mapStateToProps = state =>{
    return {

    }
}

export default connect(mapStateToProps, {addSmurf})(Form);