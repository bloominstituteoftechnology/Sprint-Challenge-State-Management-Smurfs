import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../states/actionCreators";

export function Smurf({ formValues, changeInput, postSmurfs }) {
  const onValueChange = event => {
    changeInput(event.target);
  };

  const onFormSubmit = event => {
    event.preventDefault();
    postSmurfs(formValues);
  };

  return (
    <form className="component" onSubmit={onFormSubmit}>
      <label>
        Name
        <input
          value={formValues.name}
          onChange={onValueChange}
          name="name"
          placeholder="Name"
        />
      </label>
      <br />

      <label>
        Height
        <input
          value={formValues.height}
          onChange={onValueChange}
          name="height"
          placeholder="Height"
        />
      </label>
      <br />

      <label>
        Age
        <input
          value={formValues.age}
          onChange={onValueChange}
          name="age"
          placeholder="Age"
        />
      </label>
      <br />

      <input type="submit" />
    </form>
  );
}

export default connect(
  state => state,
  actionCreators
)(Smurf);