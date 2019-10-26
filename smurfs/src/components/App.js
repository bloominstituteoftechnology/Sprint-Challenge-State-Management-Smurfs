import React, { useState, useEffect } from "react";
import axios from 'axios'
import { SmurfContext } from "../contexts/SmurfContext"
import "./App.css";
import SmurfsList from './SmurfsList'
import AddSmurfs from "./AddSmurfs";

function App() {
  const [smurfs, setSmurfs] = useState()

  useEffect(() => {
    axios.get("http://localhost:3333/smurfs")
      .then((res) => {
        setSmurfs(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const addSmurfs = (smurf) =>{
    axios.post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      setSmurfs(res.data)
    })
    .catch((err) => console.log(err))
  }

  const deleteSmurf = (smurfId) =>{
    axios.delete(`http://localhost:3333/smurfs/${smurfId}` )
    .then((res) => {
      setSmurfs(res.data)
    })
    .catch((err) => console.log(err))
  }

  return (
    <SmurfContext.Provider value={{smurfs, setSmurfs, addSmurfs, deleteSmurf}}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfsList/>
        <AddSmurfs/>
      </div>
    </SmurfContext.Provider>
  );

}

export default App;
