import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

//context
import { SmurfContext } from '../context/smurfcontext';


//components
// import SmurfForm from './smurfform';
import SmurfList from './smurflist';

class App extends Component {

  constructor() {
    super();
    this.state = {
      smurfs:[],
    }
  }

componentDidMount(){
  axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        const smurfList = res.data
        this.setState({smurfs: smurfList});
      })
      .catch((err) => (err));
  };

  render() {
    return (
      <SmurfContext.Provider value={this.state.smurfs}>
             <div className="App">
        {/* <SmurfForm /> */}
        <SmurfList />
      </div>
      </SmurfContext.Provider>
 
    );
  }
}

export default App;
