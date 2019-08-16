import React, { useState } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";

const Form = props => {
  console.log("form props:", props);
  const [smurf, setSmurf] = useState({ name: "", age: "", height: "" });

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.getSmurfs(smurf);
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
        <button type="submit">Add Smurf</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(Form);
