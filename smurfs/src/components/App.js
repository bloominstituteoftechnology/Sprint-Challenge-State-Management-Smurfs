import React, { Component } from 'react';
import SmurfList from './SmurfList';
import CreateCharacterForm from './CreateCharacterForm';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <CreateCharacterForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
