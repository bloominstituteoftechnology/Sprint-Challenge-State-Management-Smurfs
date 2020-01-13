import React, { useEffect } from "react";
import {connect} from 'react-redux';
import "./App.css";
import {fetchSmurf} from '../actions/Actions';
import Smurform from './Smurfinput';
import Smurfville from './Smurfvile';

const App= ({fetchSmurf})=> {

  useEffect(() => {
      fetchSmurf();
    }, [fetchSmurf]);

  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
          <Smurfville />
          <Smurform />
      </div>
    );
  };
  const mapStateToProps = state => {
    return {
      message: state.message,
      smurfs: state.smurfs
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchSmurf }
  )(App);
