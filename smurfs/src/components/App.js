import React, { useState, useEffect } from "react";
import Form from './Form';
import Smurfs from './Smurfs';
import "./App.css";
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';

export default function App() {

  const [smurfs, setSmurf] = useState([{
    name: '',
    age: '',
    height: ''
  }]);

  useEffect(() => {
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        let mySmurf = response.data
        console.log(mySmurf)
        setSmurf(mySmurf)
      })
      .catch(error => console.log(error))
    
  },[])


  
  // axios
  //   .post(`http://localhost:3333/smurfs`, smurfs)
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error))

  return (
    <div className="App">
      <h1>Who the Smurf Are You?</h1>
      <SmurfContext.Provider value={{smurfs, setSmurf}}>
      <Smurfs />
      <Form />
      </SmurfContext.Provider>
    </div>
  );
};

