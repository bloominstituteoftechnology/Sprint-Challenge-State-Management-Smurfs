import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurfs } from "../actions";

const Form = props => {
  console.log("form props:", props);
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.postSmurfs(smurf);
  };

  return (
    <div>
      <p>im a form</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          placeholder="name"
          value={smurf.name}
        />
        <input
          onChange={handleChange}
          name="age"
          placeholder="age"
          value={smurf.age}
        />
        <input
          onChange={handleChange}
          name="height"
          placeholder="height"
          value={smurf.height}
        />
        {/* <button type="submit">Add Smurf</button> */}
        <button onClick={handleSubmit}>Add Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { postSmurfs }
)(Form);
