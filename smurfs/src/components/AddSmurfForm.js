import React, { Component } from "react";

class AddSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    fetch("http://localhost:3333/smurfs", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(smurf)
    })
      .then(res => res.json())
      .then(data => console.log(data));

    this.setState("");
  };

  render() {
    return (
      <div>
        <h1>Add Smurf</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label>Age: </label>
            <br />
            <input
              type="text"
              name="age"
              onChange={this.onChange}
              value={this.state.age}
            />
          </div>
          <div>
            <label>Height: </label>
            <br />
            <input
              type="text"
              name="height"
              onChange={this.onChange}
              value={this.state.height}
            />
          </div>
          <br />
          <button type="submit">Add Smurf to Village</button>
        </form>
      </div>
    );
  }
}

export default AddSmurfForm;
