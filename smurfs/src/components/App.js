import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { getSmurfs } from '../actions/getSmurfs';
import { submitSmurf } from '../actions/submitSmurf';
import Form from './Form'
import SmurfList from './SmurfList'

function App(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  useEffect(() => {
    props.getSmurfs();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitSmurf({
      name: name,
      age: age,
      height: height,
      id: Date.now()
    });
    setName('')
    setAge('')
    setHeight('')
  }


  const handleNameChange = e => {
    e.preventDefault();
    setName(e.target.value)
  }

  const handleAgeChange = e => {
    e.preventDefault();
    setAge(e.target.value)
  }

  const handleHeightChange = e => {
    e.preventDefault();
    setHeight(e.target.value)
  }
  return (
    <div className="App">
      <h1>SMURFS</h1>
      <Form age={age} name={name} height={height} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleAgeChange={handleAgeChange} handleHeightChange={handleHeightChange} />

      <SmurfList smurfs={props.smurfs} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = {
  getSmurfs,
  submitSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(App);