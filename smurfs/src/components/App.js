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
        <h1>Build A Smurf</h1>
          <Smurform />
          <Smurfville />
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
