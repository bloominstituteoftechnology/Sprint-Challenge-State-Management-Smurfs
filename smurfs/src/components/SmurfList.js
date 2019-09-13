import React from 'react';
import { connect } from 'react-redux';

class SmurfList extends React.Component {
state = {
    newSmurf: ''
}


//HANDLE CHANGES
handleChanges = e => {
    this.setState({ newSmurf: e.target.value });
  };


//ADD SMURF
addSmurf = e => {
    e.preventDefault();
    this.props.addNewSmurf(this.state.newSmurf);
    this.setState({ newSmurf: '' });
  };



  render() {
    return (
        <>

        <input
          type="text"
          value={this.state.newSmurf}
          onChange={this.handleChanges}
          placeholder="Add new Smurf"
        />
        <button onClick={this.addSmurf}>Add Smurf</button>

        </>

        )
  }
}

const mapStateToProps = state => {
    return{
        members: state.smurfList.members
    };
};

export default connect(
    mapStateToProps,
    {}
)(SmurfList);