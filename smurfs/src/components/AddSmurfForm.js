import React, { Component } from "react";

class AddSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Add Smurf</h1>
        <form>
          <div>
            <label>Name: </label>
            <br />
            <input type="text" name="name" />
          </div>
          <div>
            <label>Age: </label>
            <br />
            <input type="text" name="age" />
          </div>
          <div>
            <label>Height: </label>
            <br />
            <input type="text" name="height" />
          </div>
          <br />
          <button type="submit">Add Smurf to Village</button>
        </form>
      </div>
    );
  }
}

export default AddSmurfForm;
