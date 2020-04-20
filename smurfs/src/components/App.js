import React, { Component } from "react";

import Smurf from "./Smurf";
import "./App.css";
import SmurfList from "./SmurfList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
			  <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurf />
        <SmurfList />
      </div>
    );
  }
}

export default App;