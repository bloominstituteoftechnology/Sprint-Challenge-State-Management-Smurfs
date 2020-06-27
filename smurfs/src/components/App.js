import React, { useEffect } from "react";
import "./App.css";
import { connect } from "reeact-redux";
import { fetchSmurf } from "../Actions/actions";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

const App = ({ fetchSmurf }) => {
  useEffect(() => {
    fetchSmurf();
  }, [fetchSmurf]);

  return (
    <div className="App">
      <h1>Our Beautiful Smurf Family</h1>

      <SmurfForm />
      <SmurfList />
    </div>
  );
};

const mapToStateProps = (state) => {
  return {
    smurfs: state.smurf,
    message: state.message,
  };
};

export default connect(mapStateToProps, { fetchSmurf })(App);
