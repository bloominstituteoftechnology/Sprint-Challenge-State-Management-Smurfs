import React, { Component } from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Create Your Smurf Village!</h1>
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;