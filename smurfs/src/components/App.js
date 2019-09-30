import React, {useEffect} from "react";
import {connect} from "react-redux";

import {getSmurf} from "../actions/index";
import "./App.css";


const App = ({getSmurf, isFetching, error, name, age, height, id }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  const fetchSmurf = e => {
    e.preventDefault();
    getSmurf();
  }

  if (isFetching) {
    return <h3>{error}...Fetching Smurfs</h3>
  }


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>Smurf #: {id}</h2>
        <h3>Smurf Name: {name}</h3>
        <h4>Age: {age}</h4>
        <h4>Height: {height}</h4>
        <div>Have fun!</div>
        <button onClick={fetchSmurf}> Get Smurf</button>
      </div>
    );
  }

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id
  }
}


export default connect(mapStateToProps, {getSmurf: getSmurf})(App);
