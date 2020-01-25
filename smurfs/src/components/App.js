import React, { Component } from "react";
import "./App.css";

import SmurfVillage from "./SmurfVillage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">SMURFS! 2.0 W/ Redux</h1>
          <img src={require("../images/smurfs-characters.jpg")} alt="smurfs" />
        </div>
        <div className="body">
          <SmurfVillage />
        </div>
      </div>
    );
  }
}

export default App;
