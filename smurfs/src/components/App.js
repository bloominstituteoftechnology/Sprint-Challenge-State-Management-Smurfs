// import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SmurfContext from "./contexts/SmurfContext";
import SmurfForm from "../components/SmurfForm";
// import SmurfData from "../components/SmurfData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState({ smurfs: response.data });
      })
      .catch(error => {
        console.log(error, "Something went wrong");
      });
  }

  render() {
    const { smurfs } = this.state;
    console.log(smurfs);
    return (
      <div className="App">
        <SmurfContext.Provider value={{ smurfs }}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>

          {/* <SmurfData /> */}
          <SmurfForm />
          {this.state.smurfs.map(tiny => (
            <div>
              <p>{tiny.name}</p>
              <p>{tiny.age}</p>
              <p>{tiny.height}</p>
            </div>
          ))}
        </SmurfContext.Provider>
      </div>
    );
  }
}
export default App;
