import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { editSmurf } from '../actions';

 class EditForm extends Component {
  state = {
    smurf: {
      name: this.props.location.state.name,
      age: this.props.location.state.age,
      height: this.props.location.state.height,
      id: this.props.location.state.id
    }
  }

   editSmurf = (e, smurf) => {
    e.preventDefault();
    this.props.editSmurf(smurf);
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
    <div className="EditForm">
    <form onSubmit={e => this.editSmurf(e, this.state.smurf)}>
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
            <button type="submit">Submit Edit</button>
          </form>
        </div>
      )
  }
}

 export default connect(null, { editSmurf })(EditForm)
