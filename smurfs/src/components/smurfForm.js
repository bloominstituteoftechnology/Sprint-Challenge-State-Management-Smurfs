import React, { useState } from "react";
import { connect } from "react-redux";
import { newSmurf } from "../Actions/actions";

//create smurfForm component to create state for smurfs
const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  //create handle change to setSmurf state using an event
  const handleChange = (event) => {
    setSmurf({
      ...smurf,
      [event.target.name]: event.target.value,
    });
  };

  //create handleSubmit  to create an event state change when submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    props.newSmurf(smurf);
    setSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Enter Name"
            value={smurf.name}
          />

          <input
            type="text"
            onChange={handleChange}
            name="age"
            placeholder="Enter Age"
            value={smurf.age}
          />

          <input
            type="text"
            onChange={handleChange}
            name="height"
            placeholder="Enter Height"
            value={smurf.height}
          />

          <button type="submit"> Add Smurf </button>
        </div>
      </form>
    </div>
  );
};

//mapStateToProps again
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, { newSmurf })(SmurfForm);
