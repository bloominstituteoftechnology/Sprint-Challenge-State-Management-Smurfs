import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SmurfContext from "./contexts/SmurfContext";
import SmurfForm from "../components/SmurfForm";
// import SmurfData from "../components/SmurfData";

const App = () => {
  const { smurfs, setBlueSmurf } = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/")
      .then(res => {
        setBlueSmurf(res.data);
      })
      .catch(error => {
        console.log(error, "the smurf has been eaten");
      });
  }, [setBlueSmurf]);

  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs }}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <SmurfForm />
      </SmurfContext.Provider>
    </div>
  );
};

export default App;
