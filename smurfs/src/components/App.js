import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SmurfContext from "../context/SmurfContext";
import Smurf from "../components/Smurf";
import Smurfs from "./Smurfs";
import addSmurf from './addSmurf'

export default function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => setSmurfs(res.data))
      .catch((err) => console.log("ERROR", err));
  }, []);

   const ADDSmurf = (smurf) => {
   axios
      .post("http://localhost:3333/smurfs", smurf)
       .then((res) => {
       console.log(res);
      })
      .catch((err) => {
       console.error(err);
      });
   };
  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs }}>
        <addSmurf ADDSmurf = {ADDSmurf}/>
        <Smurfs />
        
      </SmurfContext.Provider>
    </div>
  );
}
