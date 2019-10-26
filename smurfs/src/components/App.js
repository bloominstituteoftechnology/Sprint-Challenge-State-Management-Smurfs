import React, { Component } from "react";
import axios from 'axios'
import "./App.css";
class App extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
