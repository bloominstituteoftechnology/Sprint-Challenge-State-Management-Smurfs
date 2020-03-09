import React, { Component } from "react";
import "./App.css";

import DisplaySmurf from "./components/DisplySmurf";
import AddSmurfForm from "./components/AddSmurfForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>
          <AddSmurfForm />
          <hr />
          <DisplaySmurf />
        </div>
      </div>
    );
  }
}

export default App;
