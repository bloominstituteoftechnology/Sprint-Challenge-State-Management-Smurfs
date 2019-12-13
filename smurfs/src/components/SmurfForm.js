import React, { useEffect, useState, useReducer } from 'react';

import { connect } from 'react-redux';


import { smurfReducer } from "../store/reducers"
import { addSmurfs } from '../store/actions';


const SmurfForm = props => {
    const [state, dispatch] = useReducer(smurfReducer);

    const [smurf, setSmurf] = useState({name:'', age:'', height:''});

    //HANDLE CHANGES
    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value});
       
   };

   const submitForm = e => {
    e.preventDefault();
    const newSmurf = {
      ...smurf,
      id: Date.now()
    };
    console.log(props)
     props.addSmurfs(newSmurf)
     setSmurf({name:'', age:'', height:''});
    
};

console.log(state)


return (
    <div>
        <h1>Add a Smurf</h1>

        {/* INPUT NAME */}
        <form onSubmit={submitForm} className='form'>
        <input
        className='input'
        type="text"
        name= "name"
        value={smurf.name}
        onChange={handleChanges}
        placeholder="Name"
        />


         {/* INPUT AGE */}
        <input
        className='input'
        type="text"
        name= "age"
        value={smurf.age}
        onChange={handleChanges}
        placeholder="Age"
        />

        {/* INPUT Height */}
        <input
        className='input'
        type="text"
        name= "height"
        value={smurf.height}
        onChange={handleChanges}
        placeholder="Height"
        />


        <button
            className="Btn" 
            onClick={addSmurfs}>
        Add Smurf
        </button> 

        </form>

    </div>

    );

}

const mapStateToProps = state => {
    return{}
};

export default connect(
    mapStateToProps,
    {addSmurfs}
)(SmurfForm)