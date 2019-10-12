import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreator";

export function Form(props) {
  const { onFormChange, addNewSmurf, formInputValues } = props;

  const onInputChange = event => {
    onFormChange(event.target);
  };

  const onFormSubmit = event => {    
    addNewSmurf(formInputValues);
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <p>Create New Smurf here</p>
        <p>
          Name:
          <input
            type="text"
            name="name"
            value={formInputValues.name}
            onChange={onInputChange}
          />
        </p>
        <p>
          Age:
          <input
            type="text"
            name="age"
            value={formInputValues.age}
            onChange={onInputChange}
          />
        </p>
        <p>
          Height:
          <input
            type="text"
            name="height"
            value={formInputValues.height}
            onChange={onInputChange}
          />
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Form);
