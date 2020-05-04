import React, { Component } from "react";
import "./App.scss";
import SmurfList from "./SmurfList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Create your own Smurf!</h1>
        <SmurfList />
      </div>
    );
  }
}

export default App;