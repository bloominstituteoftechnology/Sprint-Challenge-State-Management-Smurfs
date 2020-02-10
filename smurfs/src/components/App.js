import React, {  } from "react";
import "./App.css";
import axios from 'axios';
import SmurfList from './SmurfList';
import Form from './Form';


const App = () => {

  axios 
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res)
    })

    return (
      <div className = "App">
        <h1>WELCOME TO SMURF VILLAGE!</h1>
        <p> below is a list of current residents</p>
        <p>feel free to apply for residency below!</p>
        <Form />
        <SmurfList />
      </div>
    );
}

export default App;