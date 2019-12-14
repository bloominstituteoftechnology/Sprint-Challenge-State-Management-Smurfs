import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route } from 'react-router-dom';
import data from '../data';
import "./App.css";

// Components
import { SmurfForm } from './SmurfForm';
import SmurfList from './SmurfList';

// Contexts
import { SmurfContext } from './contexts/SmurfContext';

// refactored class component to functional component
function App () {
  const [smurfs, setSmurfs] = useState([]);

  console.log('smurfs alive', data);
    console.log('context data', smurfs);
    useEffect(() => {
        const getSmurfs = () => {
        axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            setSmurfs(res.data);
            })
        .catch(err => {
            console.log('smurf error', err);
        });
    }
    getSmurfs();
},[]);
console.log(data);

    return (
      <SmurfContext.Provider value={smurfs}>
      <div className="App">
        <h1>SMURFS! 2.0 with Context</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div><Route exact path='/' component={SmurfForm}/></div>
        <div>Have fun!</div>
        < SmurfList />
      </div>
      </SmurfContext.Provider>
    );
  }

export default App;
