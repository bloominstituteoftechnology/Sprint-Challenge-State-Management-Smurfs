import React, { Component } from "react";
import "./App.css";

import Smurfs from './Smurfs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        </div>
        <div>
        <Smurfs />
        </div>
      </div>
    );
  }
}

export default App;
