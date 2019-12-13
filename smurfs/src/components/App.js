import React, {useState} from "react";
import {connect} from 'react-redux';
import {getVillage, addSmurf} from '../actions'


import "./App.css";
import { Village } from "./Village";
const App = props => {

  const [newSmurf, setNewSmurf] = useState({
    name: '',
    age: 0,
    height: ''
  })

  const handleChange = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(newSmurf.name, newSmurf.age, newSmurf.height)
  }
  
    return (
      <div className="App">
        <h1>Smurf Village</h1>

        <form onSubmit={handleSubmit}>
          <input type='text' name='name' onChange={handleChange} value={newSmurf.name} placeholder='name'/>
          <input type='number' name='age' onChange={handleChange} value={newSmurf.age}placeholder='age'/>
          <input type='text' name='height' onChange={handleChange} value={newSmurf.height}placeholder='height'/>
          <button type='submit'>Add</button>
        </form>

        <button onClick={props.getVillage}>Calling all smurfs!</button>
        {!props.village && !props.isSmurfing && <p>Gather the Smurfs!</p>}
        {props.isSmurfing && <p>Gathering the village...</p>}
        {props.village && !props.isSmurfing && <Village village={props.village}/>}
      </div>
    );
}

const mapStateToProps = state => {
  return {
    village: state.village,
    isSmurfing: state.isSmurfing,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {getVillage, addSmurf}
)(App);
