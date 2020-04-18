import React, { useState, useEffect } from "react";
import { SmurfsContext } from '../contexts/SmurfsContext'
import axios from 'axios'
import SmurfsList from '../components/SmurfsList'
import SmurfsForm from '../components/SmurfsForm'


import "./App.css";
const App = () => {
  
  const [smurfs, setSmurfs] = useState([])


  useEffect(() => {

      axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        setSmurfs(response.data)
      })
      .catch(err => console.log(err))
  },[])

  const postRequest = (item) => {

    axios
    .post('http://localhost:3333/smurfs', item)
    .then(response => {

      console.log(response)
    })
    .catch(err => {console.log(err.response)})
  }

  console.log(smurfs)
  
    return (
      <SmurfsContext.Provider value={{ smurfs, postRequest }}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfsForm/>
        <SmurfsList/>
      </div>
      </SmurfsContext.Provider>
    );
  }

export default App;
