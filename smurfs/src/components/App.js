import React, { Component } from "react";
import "./App.css";
import SmurfList from './SmurfList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Start inside of your `src/index.js` file!</div>
        <SmurfList />
      </div>
    );
  }
}

export default App;
