import React, { Component } from "react";

import Smurfs from './Smurfs.js'
import "./App.css";
import SmurfForm from "./SmurfsForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <SmurfForm />
        </div>
        <Smurfs />
      </div>
    );
  }
}

export default App;