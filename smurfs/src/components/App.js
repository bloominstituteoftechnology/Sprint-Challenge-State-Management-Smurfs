import React, { Component, useState, useEffect } from "react";
import "./App.css";

import {getSmurfs} from "../actions"
import {postSmurf} from "../actions"

import axios from "axios"
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { AppContext } from "../contexts/AppContext";



function App() {
  
    const [smurfs, setSmurfs] = useState([]);

    console.log("App.js smurfs", smurfs)

    useEffect(()=>{
      axios.get("http://localhost:3333/smurfs")
          .then(res=>{
              console.log(res)
              setSmurfs(res.data)
          })
          .catch(err => {
              console.log(err)
          })
      },[smurfs])
    
    const  addSmurf = (smurf) => {
      
        axios.post("http://localhost:3333/smurfs", smurf)
        .then (res => {
            setSmurfs([...smurfs,smurf])
        })
        .catch(err => {
            console.log(err)
        })
      
      
    }


    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <AppContext.Provider value={{smurfs,addSmurf}}>
          <SmurfList />
          <SmurfForm />
        </AppContext.Provider>
        
      </div>
    );
  
}

export default App;
