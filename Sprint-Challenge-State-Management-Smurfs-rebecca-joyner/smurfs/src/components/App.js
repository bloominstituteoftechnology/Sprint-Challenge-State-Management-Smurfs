import React, { Component } from "react";
import "./App.css";
import Smurf from './Smurph';
import getSmurf from '../actions/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurf getSmurf={getSmurf} /> 
      </div>
    );
  }
}

export default App;