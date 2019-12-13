import React, { Component } from "react";
import "./App.css";
import SmurfData from "./SmurfData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfData/>
      </div>
    );
  }
}

export default App;
