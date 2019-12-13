import React, { Component } from 'react';
import './Smurf.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

class Smurf extends Component {
  deleteSmurf = (e, id) => {
    e.preventDefault();
    this.props.deleteSmurf(id);
  }

  render() {
    return (
      <div className="Smurf">

      <header>
        <h2>{this.props.smurf.name}</h2>
        <button onClick={e => this.deleteSmurf(e, this.props.smurf.id)}>X</button>
      </header>

      <div className="height">
        <h3>height:</h3>
        <p>{this.props.smurf.height} tall</p>
      </div>

      <div className="age">
        <h3>Age:</h3>
        <p>{this.props.smurf.age} smurf years old</p>
      </div>

      <div className="edit">
        <Link to={{ pathname: "/edit-form", state: {
          name: this.props.smurf.name,
          age: this.props.smurf.age,
          height: this.props.smurf.height,
          id: this.props.smurf.id
        } }}>
          <button>Edit Smurf</button>
        </Link>
      </div>
    </div>
    )
  }
}

export default connect(null, { deleteSmurf })(Smurf)