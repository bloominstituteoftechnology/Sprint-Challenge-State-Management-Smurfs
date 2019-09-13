import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';


class SmurfList extends React.Component {



//HANDLE CHANGES
handleChanges = e => {
    this.setState({ newSmurf: e.target.value });
  };


//ADD SMURF
addSmurf = e => {
    e.preventDefault();
    this.props.addNewSmurf(this.state.addSmurf);
    this.setState({ addSmurf: '' });
  };



  render() {
    return (
        <>
        {/* INPUT BOX */}
        <input
          type="text"
          value={this.state.newSmurf}
          onChange={this.handleChanges}
          placeholder="Add new Smurf"
        />
        {/* BUTTON ADD SMURF */}
        <button onClick={() => props.addSmurf(props.smurf)}>Add Smurf</button>
        
        </>

        )
  }
}

const mapStateToProps = state => {
    return{
        name: state.name
    };
};

export default connect(
    mapStateToProps,
    {}
)(SmurfList);

//export default SmurfList;