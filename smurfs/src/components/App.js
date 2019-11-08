import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import SmurfForm from "../smurfForm";
import { fetchSmurfs, addSmurf } from "../smurfAction";
import SmurfCard from "../SmurfCard";



class App extends Component {
  
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <SmurfForm/>
        {this.props.fetchingSmurfs ? (
          <h3>Hold tight, we're fetching smurfs...</h3>
        ) : (
          <div className="App-intro">
            {this.props.smurfs.map(smurf => {
              return <SmurfCard key={smurf.id} name={smurf.name} id={smurf.id} age={smurf.age} height={smurf.height}/>;
            })}
          </div>
        )}
        {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
      
        <div>Have fun!</div>
     
        </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    smurfs: state.smurfs, 
    error: state.error, 
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);