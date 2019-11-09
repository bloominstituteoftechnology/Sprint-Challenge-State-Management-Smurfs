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
      <h1>SMURFS Village</h1>


      <form onSubmit={handleSubmit}>

        <input 
        placeholder='Name' 
        name='Name' 
        value={name} 
        onChange={handleNameChange} 
        /><br/>

        <input 
        placeholder='Age' 
        name='Age' value={age} 
        onChange={handleAgeChange} 
        /><br/>

        <input 
        placeholder='Height' 
        name='Height' 
        value={height} 
        onChange={handleHeightChange} 
        /><br/>
        
        <button onClick={handleSubmit}>Submit</button>
      </form>

    <div>
        {props.smurfs.map((smurf) => {
          return <div className='smurf-card' key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h5>Age: {smurf.age}</h5>
            <h5>Height: {smurf.height}</h5>
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