import React, { Component } from 'react';
import './SmurfForm.css';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
    }
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    this.props.addSmurf(smurf)
    this.props.history.push("/")
  }

  handleInputChange = e => {
    e.persist();
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }));
    console.log(this.state);
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={e => this.addSmurf(e, this.state.smurf)}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
            required
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
            required
          />
          <input
            type="number"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
            required
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addSmurf })(SmurfForm)