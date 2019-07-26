import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs'
import AddSmurfForm from './AddSmurfForm'






class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to MY state management version of Smurfs!</div>
        {/* <AddSmurfForm /> */}
        {/* <Smurfs /> */}
      </div>
    );
  }
}

export default App;
