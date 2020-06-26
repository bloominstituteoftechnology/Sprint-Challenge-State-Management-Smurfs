import React, { Component } from "react";

import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf's 2.0 with Redux</h1>
          <Smurf/>
          <SmurfForm />
      </div>
    );
  }
}

export default App;
