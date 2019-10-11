import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { addSmurf, getSmurfs } from "../actions";
import SmurfForm from "./SmurfForm";

class App extends Component {
  state = {
    update: false,
    id: ""
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  toggleForm = e => {
    const id = e.target.id;
    this.state.update
      ? this.setState({ update: false, id: "" })
      : this.setState({ update: true, id: id });
  };

  
  render() {
    console.log(this.state.id);
    const { smurfs, addSmurf } = this.props;
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="content-container">
          <div className="smurf-list">
            {smurfs.map((smurf, index) => {
              return (
                <div className="smurf-card" key={index}>
                  <h2>Name: <span>{smurf.name}</span></h2>
                  <p>Age: <span>{smurf.age}</span></p>
                  <p>Height: <span>{smurf.height}</span></p>
                </div>
              );
            })}
          </div>
          <div className="form-container">
            <SmurfForm add={addSmurf} />
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf, getSmurfs, }
)(App);