import React from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from './actions';

const Smurfs = props => {
  return (
    <form>
      <h3>Name: {props.name}</h3>
      <p>
        Age: {props.age}
        Height: {props.height}
      </p>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading, 
    
  }
}

export default connect(
  mapStateToProps, 
  { getSmurfData }
)(Smurfs);