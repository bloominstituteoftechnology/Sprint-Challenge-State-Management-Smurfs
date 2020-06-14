import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { sContext } from '../contexts'
import Slist from './Slist'
import Sform from './Sform'
import './App.css'

const App = () =>{

  //init state
  const [smurfs, setSmurfs] = useState([]);
  const [sVals, setSVals] = useState({ name: '', age: '', height: '' })

  // axios get
  const getSmurf = () => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }
    // axios delete
  const killSmurf = (id) => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }

  //handlers
  const onChange = e => setSVals({...sVals, [e.target.name]: e.target.value,});
  const onSubmit = e => {
    axios
      .post('http://localhost:3333/smurfs', sVals)
      .then(res => getSmurf())
      .catch(err => console.log(err))
  }

  //run once on mount
  useEffect(() => getSmurf(), [] );

  return (
    <div className='App'>
      <h3>Enter new Smurf info below</h3>
      <sContext.Provider value={{ smurfs, sVals, onChange, onSubmit, killSmurf }}>
        <Sform />
        <Slist />
      </sContext.Provider>
    </div>
  )
}

export default App
