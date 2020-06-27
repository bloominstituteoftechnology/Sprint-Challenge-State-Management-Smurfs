import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
import "./App.css";
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="smurf">
          <h1>SMURFS</h1>
          <Smurfs />
        </div>
        <div className="smurfs-form">
          <h1>Add New Smurfs To Smurf Village</h1>
          <SmurfForm />
        </div>
      </div>
    );
  }
}
​
export default App;