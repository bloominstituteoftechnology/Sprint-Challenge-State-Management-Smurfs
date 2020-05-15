import React, { Component } from "react";
import axios from 'axios'
import "./App.css";
import SmurfsForm from './components/SmurfsForm';
import Smurfs from './components/Smurfs'

class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res, 'axios calll')
    })
  }

  render() {
    return (
      <>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <h2>Enter Smurf Data</h2>
        <SmurfsForm/>
        <Smurfs/>
      </div>
      </>
    );
  }
}

export default App;
