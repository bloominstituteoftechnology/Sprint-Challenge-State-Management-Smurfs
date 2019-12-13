import React from "react";
import { Route } from 'react-router-dom';
import data from './data';
import "./App.css";

// Components
import { SmurfForm } from './SmurfForm';
import { SmurfList } from './SmurfList';

// Contexts
import { SmurfContext } from './contexts/SmurfContext';



// refactored class component to functional component
function App () {

    return (
      <SmurfContext.Provider value={{smurfs}}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        < SmurfForm />
        <div>Have fun!</div>
        < SmurfList />
      </div>
      </SmurfContext.Provider>
    );
  }
}

export default App;
