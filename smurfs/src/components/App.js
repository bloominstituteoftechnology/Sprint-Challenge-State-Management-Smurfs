import React, { Component } from "react";

import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="title">Smurf's 2.0 with Redux</h1>
          <div className="App">
            <Smurf/>
            <div className="addForm">
              <SmurfForm />
            </div>
          </div>
      </div>
    
    );
  }
}

export default App;
