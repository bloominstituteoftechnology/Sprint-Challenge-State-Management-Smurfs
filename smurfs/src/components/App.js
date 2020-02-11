import React, { Component } from "react";
import "./App.css";
import Smurfs from '../components/Smurfs';
import AddSmurf from '../components/AddSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Smurfs />
        <AddSmurf />
      </div>
    );
  }
}

export default App;
