import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import { SmurfContext } from '../context/SmurfContext';

import { SmurfList } from './SmurfList';
import { SmurfForm } from './SmurfForm';

const App = () => {

  const [ smurfs, setSmurfs] = useState([]);
  
  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(res => {
        console.log(`Inside Axios call:`, res);
        setSmurfs(res.data)
      })
      .catch(err => {
        console.log(`Axios call error: ${err}`)
      })
  },[])

  console.log(`Smurfs array: `, smurfs);

  return (
    <SmurfContext.Provider value={[ smurfs, setSmurfs ]}>
      <div className="">
        <h1>SMURFS!</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
