import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import "./App.css";
import { getSmurfs } from '../actions/getSmurfs';
import { submitSmurf } from '../actions/submitSmurf';

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
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>

      <form onSubmit={handleSubmit}>
        <input placeholder='Name' name='Name' value={name} onChange={handleNameChange} />
        <input placeholder='Age' name='Age' value={age} onChange={handleAgeChange} />
        <input placeholder='Height in cm' name='Height' value={height} onChange={handleHeightChange} />
        <button onClick={handleSubmit}>Submit</button>
      </form>

    <div className='smurf-cards'>
        {props.smurfs.map((smurf) => {
          return <div className='smurf-card' key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
          </div>
        })}
      </div>

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
