import React, { useState, useContext } from "react";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

import { AppContext } from "../contexts/AppContext";

const SmurfForm = props => {

    const {smurfs, addSmurf } = useContext(AppContext)

    const [newSmurf, setNewSmurf] = useState({
      name: "",
      age: "",
      height: "",
      id: Date.now()
    });
  
    const changeHandler = e => {
      setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    };
  
    const submitForm = e => {
      e.preventDefault();
    };
  
    return (
      <div>
        <form onSubmit={submitForm}>
          <label>
            Name:
            <input
              name="name"
              id=""
              type="text"
              onChange={changeHandler}
              value={newSmurf.name}
            />
          </label>
          {"    "}
          <label>
            Age:
            <input
              name="age"
              id=""
              type="text"
              onChange={changeHandler}
              value={newSmurf.age}
            />
          </label>
          {"    "}
          <label>
            height:
            <input
              name="height"
              id=""
              type="text"
              onChange={changeHandler}
              value={newSmurf.height}
            />
          </label>
          {"    "}
          <button type="submit" onClick={()=> addSmurf(newSmurf)}>
            Add Your Smurf!
          </button>
        </form>
      </div>
    );
  };
  
  
  export default SmurfForm;