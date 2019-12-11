import React from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from './actions';

const Smurfs = props => {
  return (
    <>
      {/* <div>{props.blue.name}</div> */}
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading, 
    
  }
}

  // <form>
    //   {props.isLoading ?
    //   <h3>Name: {props.name}</h3>
    //   <p>
    //     Age: {props.age}
    //     Height: {props.height}
    //   </p>
    // </form>

export default connect(
  mapStateToProps, 
  { getSmurfData }
)(Smurfs);