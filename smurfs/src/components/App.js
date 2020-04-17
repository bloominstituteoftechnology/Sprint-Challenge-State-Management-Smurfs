import React, { Component, useState } from "react";
import "./App.css";

import {getSmurfs} from "../actions"
import {postSmurf} from "../actions"


import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import { AppContext } from "../contexts/AppContext";



function App() {
  
    const [smurfs, setSmurfs] = useState(getSmurfs);
    const addSmurf = smurf => {
      setSmurfs([...smurf, postSmurf])
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
