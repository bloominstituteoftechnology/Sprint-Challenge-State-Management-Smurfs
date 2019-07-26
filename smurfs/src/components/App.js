import React, { Component } from "react";

import "./App.css";

import { getSmurfs, addSmurf } from'../store/actions/index';
import { connect } from 'react-redux';



class App extends Component {
  state = {
    smurf: {
      name:   '',
      age:    '',
      height: '',
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.smurf);
  };

  handleChange = event => {
    event.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [event.target.name]: event.target.value
      }
    }))
}

  componentDidMount () {
    this.props.getSmurfs()
  };


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to MY state management version of Smurfs!</div>
        {this.props.smurfs.map((smurf, i) => (
          <div id={smurf.id} key={i}>
            <h2>{smurf.name}</h2>
            <p>{smurf.age} Smurf Years Old</p>
            <p>{smurf.height}  Tall</p>
          </div>
        ))}


        <form onSubmit = {this.handleSubmit}>

        <input
          type= 'text'
          name= 'name'
          placeholder= 'Enter Name'
          value= {this.state.name}
          onChange= {this.handleChange}
        />

        <input
          type= 'text'
          name= 'age'
          placeholder= 'Enter Age'
          value= {this.state.age}
          onChange= {this.handleChange}
        />

        <input
          type= 'text'
          name= 'height'
          placeholder= 'Enter Height'
          value= {this.state.height}
          onChange= {this.handleChange}
        />

        <button>Add a Smurf!</button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({ smurfs: state.smurfs })


export default connect (mapStateToProps, { getSmurfs, addSmurf }) (App);
