import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { smurfy } from '../actions/smurf';
import SmurfForm from '../components/SmurfForm';

import "./App.css";

function App (props) {
  useEffect(() => {
    props.smurfy();
  }, [props]);

      return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />      
      </div>
    );
  }

function mapStateToProps(state) {
  return { 
  name: state.name,
  age: state.age,
  height: state.height,
  id: state.id
  };
}

const mapDispatchToProps = {
  smurfy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
