import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import SmurfForm from "./components/smurfForm";
import { fetchSmurfs, updateSmurf, postSmurf, deleteSmurf} from "./components/smurfAction";
import SmurfCard from "./components/SmurfCard";



class App extends Component {
  
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {

    return (
      <div className="App">
        <div className="Header">
        <h1 >SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div className="swing">Wee!</div>
        </div>
        <SmurfForm/>
        {this.props.fetchingSmurfs ? (
          <h3>Hold tight, we're fetching smurfs...</h3>
        ) : (
          <div className="App-intro">
            {this.props.smurfs.map(smurf => {
              return (
              <SmurfCard 
              id={smurf.id}
              key={smurf.id} 
              name={smurf.name} 
              age={smurf.age} 
              height={smurf.height}
              update={smurf.updateSmurf}
              delete={smurf.deleteSmurf}/>
            )})}
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

export default connect(mapStateToProps, { fetchSmurfs, updateSmurf, postSmurf, deleteSmurf })(App);