import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { smurfy } from '../actions/smurf';

import "./App.css";


function App (props) {
  useEffect(() => {
    props.smurfy();
  }, []);

      return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
      
      </div>
    );
  }

function mapStateToProps(state) {
  return { 
  name: state.name.name,
  age: state.age.age,
  height: state.height.height
  };
}

const mapDispatchToProps = {
  smurfy
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
