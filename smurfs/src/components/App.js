import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";
import smurfContexts from "../Contexts/smurfContexts";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
export default function() {
  const [smurfState, setSmurfState] = useState([]);
  function getData() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => setSmurfState(response.data))
      .catch(error => console.log("fetching data error", error));
  }
  function dataPosted(smurf) {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(response => setSmurfState(response.data))
      .catch(error => console.log("post error", error));
  }
  function dataUpdated(smurf){
  axios
    .put("http://localhost:3333/smurfs", smurf)
    .then(response => setSmurfState(response.data))
    .catch(error => console.log("put error", error))
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Have fun!</div>
      <smurfContexts.Provider>
        <SmurfList smurfs={smurfState} />
      </smurfContexts.Provider>
      <SmurfForm post={dataPosted} />
      {/* <button onClick={dataUpdated}>Edit</button> */}
    </div>
  );
}
