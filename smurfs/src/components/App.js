import React, { useState, useEffect } from "react";
import "./App.css";
import FormComponent from "./Form";
import { getSmurfs } from '../actions'
import { connect } from 'react-redux';


//error, isFetching, smurfs are insitalState into reducer into index.js passed to store which is wrapped in App 
const App = ({getSmurfs, isFetching, smurfs, error}) => {

  useEffect( () => {
    console.log('useEffectApp.js');
    getSmurfs();
  }, [getSmurfs])
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
       {smurfs.map(smurf => 
          <div>
            <h2>{smurf.name}</h2>
            <p>Age:{smurf.age}</p>
            <p>Height: {smurf.height}cm</p>
          </div>
          )}
          <FormComponent />
            <button onClick={getSmurfs}>Update Smurfs</button>
        </div>

    );
  }

  const mapStateToProps = state => {
    return{
      smurfs: state.smurfs,
      isFetching: state.isFetching,
      error: state.error
    }
  }


export default connect(mapStateToProps, {getSmurfs})(App)
