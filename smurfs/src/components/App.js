import React, { Component } from "react";
import "./App.css";

import { newSmurf } from "../actions/Actions"
import SmurfList from "./SmurfList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Smurfville!</h1>
          <SmurfList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

// export default connect(mapStateToProps, { newSmurf })(App);

export default App;
