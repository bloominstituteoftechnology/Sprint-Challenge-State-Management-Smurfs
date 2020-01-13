import React, { Component } from "react";
import "./App.css";
// import { Route} from 'react-router-dom';
import SmurfsList from './smurfs_List';
import SmurfForm from './smurf_Form';
import Header from './header';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        
        <div className = 'grid-2'>
           <SmurfsList/>
           <SmurfForm />
        </div>

      </div>
    );
  }
}
export default App;
