import React, { useState, useEffect} from "react";
import { SmurfContext } from '../context';
import axios from 'axios';
import Form from './Form';
import Smurfs from './Smurfs';
import "./App.css";

 function App() { 
    const [smurfs, setSmurfs] = useState([]);
    useEffect( () => {
      axios.get(`http://localhost:3333/smurfs`)
           .then(res => {
              setSmurfs(res.data);
              console.log(res)
           })
           .catch( err => {
              console.log(err)
           })
    },[])
    const smufee = {
       smurfs, setSmurfs
    }
    return (
      <SmurfContext.Provider value={smufee}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <Form />
          <Smurfs/>       
        </div>
      </SmurfContext.Provider>
    );
  }


export default App;
