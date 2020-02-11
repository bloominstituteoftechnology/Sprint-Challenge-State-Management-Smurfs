import React, { Component } from "react";
import "./App.css";

import { fetchSmurf } from "../actions/Actions"
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
import { connect } from "react-redux";

// class App extends Component {
  const App = () => {
  // render() {
    return (
      <div className="App">
        <h1>Welcome to Smurfville!</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  // }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchSmurf })(App);