import React from 'react';
import { connect } from 'react-redux';

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
    name: state.name,
    age: state.age,
    height: state.height,
    id: state.id
  }
}

export default connect(mapStateToProps, {})(Smurfs);