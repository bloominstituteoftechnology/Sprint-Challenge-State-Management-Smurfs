import React from "react";
import { connect } from 'react-redux';
import "./App.css";
import { getSmurfs } from '../actions/getSmurfs';

function App(props) {
  props.getSmurfs()
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      {/* {props.smurfs.map((smurf) => {
        return <p>{smurf.name}</p>
      })} */}

    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = {
  getSmurfs
}

export default connect(mapStateToProps, mapDispatchToProps)(App);