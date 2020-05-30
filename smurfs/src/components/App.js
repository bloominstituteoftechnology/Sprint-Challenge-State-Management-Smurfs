import React, { Component } from "react";
import Smurfs from './Smurfs'
import SmurfsForm from './SmurfsForm'
import "./App.css";

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
          <SmurfsForm />
        </div>
      </div>
    );
  }
}


export default App;