import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions/getData';
import { removeSmurf } from '../actions/removeSmurf';

class Smurf extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getData()
  }

  
  render() {
  console.log('smurf props', this.props)
    return (
      <div>
        <h2>Smurf List</h2>
        {this.props.smurfs.length > 0 ? this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.id}>
              <p>Name: {smurf.name}</p>
              <p>Age: {smurf.age} yr(s)</p>
              <p>Height: {smurf.height} cm</p>
              <button onClick={() => this.props.removeSmurf(smurf.id)}>Remove Smurf</button>
            </div>
          )
        }) : <h2>Loading...</h2> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('smurf.js mSTP', state)
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { getData, removeSmurf })(Smurf)