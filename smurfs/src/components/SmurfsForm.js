import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {addSmurf, getSmurfs} from '../actions';

const SmurfForm = props =>{
    const [smurf, setSmurf] = useState({name:'', age:'', height:''});

    const changeHandler = event =>{
        setSmurf({...smurf, [event.target.name]: event.target.value});
    };

    useEffect(()=>{
        getSmurfs();
    },[])

    const submitForm = event=>{
    event.preventDefault();
    const newSmurf = {
        ...smurf, 
        id:Date.now()
    };
    props.addSmurf(newSmurf);
    setSmurf({name:'', age:'', height:''})
};
 
return(
    <form onSubmit={submitForm} className='smurfForm'>
    <label htmlFor="new Smurf">New Smurf: </label>
    <input
      type="text"
      name="name"
      placeholder="New Smurf"
      value={smurf.name}
      onChange={changeHandler}
    />

    <label htmlFor="smurf age">Smurf Age: </label>
    <input
      type="text"
      name="age"
      placeholder="smurf age"
      value={smurf.age}
      onChange={changeHandler}
    />

    <label htmlFor="smurf height">Smurf Height: </label>
      <input
        type="text"
        name="height"
        placeholder="smurf height"
        value={smurf.height} 
        onChange={changeHandler}
      />

    <button type="submit">Add New Smurf</button>
  </form>
);

};

const mapStateToProps = state =>{
    return {

    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);