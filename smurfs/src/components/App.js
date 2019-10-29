import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { smurfy } from '../actions/smurf';
import SmurfForm from './SmurfForm';
import Smurf from './Smurf';

import "./App.css";

function App(props) {
  console.log(props.smurfs)
  useEffect(() => {
    props.smurfy();
  }, []);

      return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />  
        <Smurf smurfs={props.smurfs} />    
      </div>
    );
  }

function mapStateToProps(state) {
  return { 
    smurfs: state.smurfs
  // name: state.name,
  // age: state.age,
  // height: state.height,
  // id: state.id
  };
}

const mapDispatchToProps = {
  smurfy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
