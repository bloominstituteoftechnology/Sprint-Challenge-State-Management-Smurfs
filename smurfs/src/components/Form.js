import React, { useState } from "react";
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

function Form (props) {
  const [fields, setFields] = useState({
    name: '',
    age: '',
    height: ''
  })

  const handleChanges = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addSmurf(fields);
    setFields({
      name: '',
      age: '',
      height: '',
      id: ''
    })
  }

    return (
      <div>
        <form>
          <label>Add Smurfs to the village!
            <input
              name="name"
              onChange={handleChanges}
              type="text"
              value={fields.name}
              placeholder="Name"
            />
            <input
              name="age"
              onChange={handleChanges}
              type="text"
              value={fields.age}
              placeholder="Age"
            />
            <input
              name="height"
              onChange={handleChanges}
              type="text"
              value={fields.height}
              placeholder="Height"
            />
            <input
              name="id"
              onChange={handleChanges}
              type="text"
              value={fields.id}
              placeholder="ID"
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            ADD
          </button>
        </form>
      </div>
    );
};

export default connect(null, {addSmurf})(Form);
