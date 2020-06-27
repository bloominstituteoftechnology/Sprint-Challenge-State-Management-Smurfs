import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurf } from "../Actions/actions";
import SmurfForm from "./smurfForm";
import SmurfList from "./smurfList";

//useEffect hook to fetch smurfs action
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

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurf,
    message: state.message,
  };
};

export default connect(mapStateToProps, { fetchSmurf })(App);
