import React, { Component } from "react";
import "./App.css";
import SmurfsList from "./SmurfsList.js"
import Form from "./Form.js"
import axios from "axios"

class App extends Component {

  render() {

    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res)
      })

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Form />
        <SmurfsList />

      </div>
    )
  }
}

export default App;
