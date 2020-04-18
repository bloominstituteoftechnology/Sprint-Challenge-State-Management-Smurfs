import React, { useEffect } from "react";
import "./App.css";

import { connect } from "react-redux";
import { fetchSmurf } from "../actions/Actions"
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

const App = ({ fetchSmurf }) => {
  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf]);

  return (
    <div className="App">
      <h1>Welcome to Smurfville!</h1>
      <SmurfList />
      <SmurfForm />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    message: state.message
  }
}

export default connect(mapStateToProps, { fetchSmurf })(App);
