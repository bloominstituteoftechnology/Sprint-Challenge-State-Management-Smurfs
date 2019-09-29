import React, { Component } from "react";
import "./App.css";

import Smurf from "./smurf";
import SmurfForm from "./smurfForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurf />
      </div>
    );
  }
}

export default App;
