import React, { useEffect, useState, useReducer } from 'react';
import { connect } from 'react-redux';


import { reducer } from "../store/reducers"
import { addSmurfs } from '../store/actions';

const SmurfForm = props => {
    const [state, dispatch] = useReducer(reducer);

    const [smurf, setSmurf] = useState({name:'', age:'', height:''});
   


//HANDLE CHANGES
    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value});
        
    };

// SUBMIT FORM - when you click button adds new smurf
    const submitForm = e => {
        e.preventDefault();
        const newSmurf = {
          ...smurf,
          id: Date.now()
        };
        props.addNewSmurf(newSmurf)
        setSmurf({name:'', age:'', height:''});
    };





    console.log(state)

// handleInput = e => {
//     this.setstate
// }

return (

    <div>

    <h2>Add a Smurf!</h2>
   
   
    {/* INPUT NAME */}
    <form onSubmit={submitForm}>
        <input
        type="text"
        name= "name"
        value={smurf.name}
        onChange={handleChanges}
        placeholder="Name"
        />

    {/* INPUT AGE */}
        <input
        type="text"
        name= "age"
        value={smurf.age}
        onChange={handleChanges}
        placeholder="Age"
        />
    {/* INPUT Height */}
        <input
        type="text"
        name= "height"
        value={smurf.height}
        onChange={handleChanges}
        placeholder="Height"
    />




    {/* BUTTON ADD SMURF */}
   

  




  

        <button
            className="BtnAddItem"
              onClick={() => {
                dispatch({ type: "ADD_SMURF_SUCCESS", payload: smurf});
                
              }}
             
            > 
              Add Smurf
            </button>
 
            </form>
    
            {/* <h3>{smurf.name}</h3>
             <p>{smurf.age}</p>
             <p>{smurf.height}</p> */}

    </div>

    );

    }

   

   



    const mapStateToProps = state => {
        return{}
    };
    
    export default connect(
        mapStateToProps,
        {addSmurfs}
    )(SmurfForm);