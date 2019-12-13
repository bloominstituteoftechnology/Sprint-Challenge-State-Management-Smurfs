import React, { Component } from 'react';
import Smurf from './Smurf';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      this.props.smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)
    )
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
})

export default connect(mapStateToProps, { getSmurfs })(Smurfs)