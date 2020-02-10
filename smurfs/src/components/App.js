import React, { Component } from "react";
import "./App.css";
import  SmurfForm  from '../components/smurfForm';
import  Smurfs  from '../components/smurfs';
import AddSmurf from '../components/addSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        <Smurfs />
        <AddSmurf />
      </div>
    );
  }
}

export default App;
