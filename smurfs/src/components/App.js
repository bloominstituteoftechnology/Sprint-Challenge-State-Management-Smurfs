import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SmurfContext from "./contexts/SmurfContext";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(error => {
        console.log(error, "the smurf has been eaten");
      });
  }

  render() {
    return (
      <div className="App">
        <SmurfContext.Provider>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
        </SmurfContext.Provider>
      </div>
    );
  }
}

export default App;
