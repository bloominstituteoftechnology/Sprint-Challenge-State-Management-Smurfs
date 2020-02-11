import React, { Component } from "react";
import "./App.css";

import Smurf from "./Smurf";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

          <Smurf />
          <SmurfCard />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurf })(App);
