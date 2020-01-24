import React, { useState, useReducer, useEffect } from "react";
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
      <div>
      <input
        type='text'
        name='name'
        value={newSmurf.name}
        onChange={handleChanges}
      />
      </div>
      <button onClick={() => props.smurfForm(newSmurf)}> Create Your Own Smurf </button>

      { props.smurf.map(item => {
        return(
          <Smurf smurf={item} key={item.id} />
          )
      })
      }
</div>
      )}

      const mapStateToProps = state => {
        return {
          smurf: state.smurf
        }
      }

export default connect(mapStateToProps, {smurfFetcher, smurfForm})(App);
