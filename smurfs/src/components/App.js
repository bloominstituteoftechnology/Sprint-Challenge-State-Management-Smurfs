import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';

import "./App.css";
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

class App extends Component {
  state = {
    smurfs: []
  }
  componentDidMount() {
      axios.get('http://localhost:3333/smurfs')
          .then(response => {
            console.log(response);
            //this.setState({ smurfs: response.data});

          })
          .catch(err => {
              console.log ({ err })
          })
  };

  //why can't I get this axios.get to work? It's the same as in the other place completely!


  render() {

    //console.log(this.state);

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
          <p> </p>
        <SmurfForm />
          <p> </p>
        {/* <SmurfList smurfs={this.state.smurfs}/> */}
        <SmurfList />
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    /**takes in state and returns an object like  */
    /**inside the object should be an array fo smurfs */
    // name: state.smurf.name,
    // age: state.smurf.age,
    // height: state.smurf.height,
    // id: state.smurf.id
    //just the parts we want for this component
  }
}

export default connect(mapStateToProps, {})(App);
