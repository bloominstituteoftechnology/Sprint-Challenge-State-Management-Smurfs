import React, { useEffect, useState, useReducer } from 'react';
import { connect } from 'react-redux';


import { reducer } from "../store/reducers"
import { addSmurfs } from '../store/actions';

const SmurfForm = props => {
    const [state, dispatch] = useReducer(reducer);

    const [newTitleText, setNewTitleText,] = useState("");
    //const [toggle, setToggle] = useState("");



//HANDLE CHANGES
    const handleChanges = e => {
    setNewTitleText(e.target.value);
    };

    console.log(state)



return (

    <div>

    <h2>Smurfs</h2>

   
    {/* INPUT BOX */}
    
    <input
      type="text"
       value={newTitleText}
       onChange={handleChanges}
      placeholder="Add new Smurf"
    />
    {/* BUTTON ADD SMURF */}
   

    <button
        className="BtnAddItem"
          onClick={() => {
            dispatch({ type: "ADD_SMURF_SUCCESS", payload: newTitleText });
            
          }}
        >
          Add Smurf
        </button>
    
    </div>

    );

    }

   

   
   export default SmurfForm;


    // const mapStateToProps = state => {
    //     return{
    //         smurfs: state.smurfs,
    //       addingSmurfs: state.addingSmurfs,
    //       error: state.error
    //     };
    // };
    
    // export default connect(
    //     mapStateToProps,
    //     {addSmurfs}
    // )(SmurfForm);