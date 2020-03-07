import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import SmurfList from '../components/SmurfList';
import Form from '../components/Form';

// Context
import SmurfContext from '../context.js/SmurfContext';

function App () {
const [data, setData] = useState([])


useEffect(() => {
axios.get('http://localhost:3333/smurfs')
  .then(response => {
    console.log(response.data)
      setData(response.data)
    }) .catch(err => console.log(err, 'error recieving data from smurfs'))
}, data);



    return (
      <div className="App">
      <SmurfContext.Provider value={{data}}>
        <h1>Our Smurf Family</h1>
        <Form/>
        <SmurfList/>
      </SmurfContext.Provider> 
      </div>
    );
}

export default App;
