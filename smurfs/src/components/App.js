import React from "react";
import "./App.css";
import axios from 'axios';
import Form from './Form';
import SmurfList from './SmurfList';

const App = () => {
  axios 
    .get('http://localhost:3333/smurfs')
    .then(res => {
    })

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <SmurfList />
      </div>
    );
}

export default App;