import React, { Component } from "react";
import "./App.css";
import SmurfForm from './form';
import 'w3-css/';


class App extends Component {
 


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm/>
      </div>
    );
  }
}

export default App;
