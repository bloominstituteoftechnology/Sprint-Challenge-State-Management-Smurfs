import React, { Component, useEffect, useState } from "react";
import "./App.css";
import SmurfCard from '../components/SmurfCard'
import Axios from "axios";

function App() {
  const[smurf, setSmurf]= useState([])

  useEffect(() => {
    Axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      setSmurf(res)
    })

  },[])

  const add = () => {
    dispatch(addSmurf(event.target.value))
  }


  
    return (
      <SmurfCard/>
    );
  
}

export default App;
