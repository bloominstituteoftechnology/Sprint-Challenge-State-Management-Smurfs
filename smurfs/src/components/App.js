import React, { useEffect } from "react";
import "./App.css";
import SmurfForm from './SmurfForm'
import SmurfList from './SmurfList'
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index'

const App = props => {

  useEffect(() => {
    props.getSmurfs();
  }, [])
  //shouldnt I pass stuff from here to my components?

  console.log(props)
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <SmurfList />
      <SmurfForm smurfs={props.smurfs} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { getSmurfs })(App);

