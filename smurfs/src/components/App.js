import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { fetchData } from '../store/actions';
import SmurfList from './SmurfList';
import NewSmurfForm from './NewSmurfForm';



const App = props => {
  useEffect(() => {
    if (props.smurfs.length === 0) {
      props.fetchData();
    }
  }, [props.smurfs]);
  console.log('PROPS FROM DATA', props);

  return (
    <div className="App">
      <h1> These are Smurfs with Redux </h1>
      <button onClick={props.getData}>Get New Smurf</button>
      <SmurfList list={props.smurfs} />
      <NewSmurfForm />
    </div>  
    );
};

const mapStateToProps = state => {
  console.log("App State", state);
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps, 
  { fetchData }
)(App);