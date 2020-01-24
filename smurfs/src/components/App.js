import React, { useState, useEffect } from "react";
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { smurfFetcher, smurfForm } from '../actions/index';
import "./App.css";

function App (props){

  // fetcha smurf
  useEffect( () => {
    props.smurfFetcher()
  }, [])

  // add a smurf
const [newSmurf, setNewSmurf] = useState({
  name:'',
  age: '',
  height: ''
})

// change handler
const handleChanges = e => {
  setNewSmurf({
    ...newSmurf,
    [e.target.name] : e.target.value
  })
}

  return (
    <div className="App">
      <h2 className='App-title'> SMURF CREATOR! </h2>
      <div className="inputs">
      <input
        placeholder="Smurf Name"
        type='text'
        name='name'
        value={newSmurf.name}
        onChange={handleChanges}
      />
      <input
        placeholder="Smurf Age"
        type='text'
        name='age'
        value={newSmurf.age}
        onChange={handleChanges}
      />
      <input
        placeholder="Smurf Height"
        type='text'
        name='height'
        value={newSmurf.height}
        onChange={handleChanges}
      />
      </div>
      <div className="button">
      <button className='create' onClick={() => props.smurfForm(newSmurf)}> Create Your Own Smurf </button>
      </div>
{/* mapping */}
<div className="card-div">

      { props.smurf.map(item => {
        return(
          <Smurf smurf={item} key={item.id} />
          )
        })
      }
      </div>
</div>
      )}

      // mapStateToProps
      const mapStateToProps = state => {
        return {
          smurf: state.smurf
        }
      }

export default connect(mapStateToProps, {smurfFetcher, smurfForm})(App);
