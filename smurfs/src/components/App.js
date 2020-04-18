import React, { Component, useState, useReducer, useEffect } from "react";
import axios from "axios";
import "./App.css";

// context
import smurfList from "../contexts/smurflistcontext";

// Component
import SmurfVillage from "./smurfVillage";

function App() {
  const [smurfs, setSmurfs] = useState([])
  const [smurfName, setSmurfName] = useState('');
  const [smurfAge, setSmurfAge] = useState(0);
  const [smurfHeight, setSmurfHeight] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(result => {
        setSmurfs(result.data)
    })
    .catch(error => {console.log('caught an error: ',error)})
  }, [])

  return (
    <div className="App">
      <smurfList.Provider value={smurfs}>
        <SmurfVillage />
        <form onSubmit={(e) => {
          e.preventDefault()
          const newSmurf={
            name: smurfName,
            age: smurfAge,
            height: smurfHeight,
            id: smurfs.length
          }
          axios.post("http://localhost:3333/smurfs", newSmurf)
            .then(r => console.log(r.data))

          }}>
          <h3>New Smurf Name</h3>
          <input 
            type="text"
            onChange={(e) => setSmurfName(e.target.value)}
          />
          <h3>New Smurf Age</h3>
          <input 
            type="num"
            onChange={(e) => setSmurfAge(e.target.value)}
          />
          <h3>New Smurf Height</h3>
          <input
            type="text"
            onChange={(e) => {setSmurfHeight(e.target.value)}}
          />
          <input
            type="submit"
            value="submit form"
          />
        </form>
      </smurfList.Provider>
    </div>
  );

}

export default App;
