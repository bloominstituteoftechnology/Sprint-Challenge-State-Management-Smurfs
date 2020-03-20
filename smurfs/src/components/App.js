import React, { Component } from "react";
import Smurf from './smurf';
import Form from './form';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <Smurf/>
      </div>
    );
  }
}

export default App;
