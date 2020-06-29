import React, { Component } from "react";
import SmurfInfo from "./SmurfInfo";
import SmurfForm from "./SmurfForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfInfo />
      </div>
    );
  }
}

export default App;