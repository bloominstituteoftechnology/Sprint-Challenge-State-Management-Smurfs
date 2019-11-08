import React from "react";

import {NewSmurfForm} from './NewSmurfForm'
import SmurfList from './SmurfList'
import "./App.css";


//console.log(state)
const App = (props) => {
  console.log(props)

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <NewSmurfForm />
      <SmurfList />
    </div>
  );
}


export default App;
