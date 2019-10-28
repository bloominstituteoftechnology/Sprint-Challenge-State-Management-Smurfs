import React, { Component } from "react";
import Village from './Village'
import Form from './Form';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Welcome to your village, populate.</div>
        <Village />
        <Form />
      </div>
    );
  }
}

export default App;
