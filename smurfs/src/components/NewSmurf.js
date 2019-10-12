import React, { useState } from "react";
import { connect } from "react-redux";
//import { add_smurf } from "../actions/index";
import { new_smurf } from "../actions/index";

const AddSmurf = props => {
    console.log(`NewSmurf props`, props)
      const[smurf, setSmurf] = useState({name:"", age:"", height:""})

      const handleChanges = e =>{
          //name and value from input fields, sets key: value pairs
        setSmurf({...smurf, [e.target.name]: e.target.value})
      }

      const logValues = event => {
        event.preventDefault();
        props.new_smurf(smurf);
        setSmurf({
          name: "",
          age: "",
          height: ""
        });
      };

    return (
      <form onSubmit={logValues}>
        <label>Smurf's Name
        <input
          maxLength="20"
          type="text"
          name="name"
          id="sname"
          onChange={handleChanges}
          value={smurf.name}
          placeholder="Smurf Name"
        />
        </label>
        {/* two ways to create labels, first way, wrapped as in above */}
        <label forHtml="sage">Age</label>
        <input
          type="number"
          name="age"
          id="sage"
          onChange={handleChanges}
          value={smurf.age}
          placeholder="age"
        />
        

        <label>Height
        <input
          type="number"
          name="height"
          id="sheight"
          onChange={handleChanges}
          value={smurf.height}
          placeholder="height inches"
        />
        </label>
        <button onClick={logValues}> Add Smurf </button>
      </form>
    );
  }


export default connect(
  null,
  { new_smurf }
)(AddSmurf);