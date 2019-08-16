import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Smurfs from './Smurfs';
import Navigation from './Navigation';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route path="/" component={Smurfs} />
          <Route path="/smurf-form" component={SmurfForm} />
        </div>
      </Router>
    );
  }
}

export default App;