import React from "react";
import axios from "axios";

export default class extends React.Component {
  constructor() {
    super();
    this.state = { name: "", age: 0, height: "" };
  }

  smurfHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const blueSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    console.log(blueSmurf);

    axios
      .post("http://localhost:3333/smurfs", blueSmurf)
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error, "he has eaten your tiny smurf");
      });
    window.location.reload();
  };

  render() {
    return (
      <div>
        <h1>See the Little Blue Smurf</h1>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="enter name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.smurfHandler}
          />
          <input
            placeholder="enter age"
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.smurfHandler}
          />
          <input
            placeholder="enter height"
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.smurfHandler}
          />
          <button type="submit">Add Smurf!</button>
        </form>
      </div>
    );
  }
}

//  export default SmurfForm;
