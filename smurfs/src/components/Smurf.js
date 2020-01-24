import React from "react";
import "./App.css";

import {connect} from 'react-redux';
import {fetchData} from '../actions';
import Form from './Form';


const Smurf = props => {
  props.fetchData();
  return (
    <div className="Smurf">
      <h1>Smurfs</h1>
      <div className='smurf-container'>{props.smurfs.map(item => {
        return (
          <div className='smurf'>
            <div>
              <h2>{item.name}</h2>
              <p>Age: {item.age}</p>
              <p>Heigh: {item.height}</p>
            </div>
          </div>
        );
      })}</div>
      <Form />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapStateToProps,
  {fetchData}
)(Smurf);
