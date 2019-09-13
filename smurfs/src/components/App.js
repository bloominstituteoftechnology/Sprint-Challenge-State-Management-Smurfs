import React from "react";
import axios from 'axios';
import "./App.css";
import SmurfList from './SmurfList';
import { SmurfContext } from '../contexts/SmurfContext';

const App = () => {
  let smurfs = [];
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      smurfs = [...res.data];
      console.log("smurfs in axios: ", smurfs);
    })

    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <SmurfList />
      </div>
    );
  }


export default App;
 