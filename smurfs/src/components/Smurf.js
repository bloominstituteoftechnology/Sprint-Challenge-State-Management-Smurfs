import React from 'react';
import { connect } from 'react-redux';
import { deleteCharacter } from '../actions';

const Smurf = props => {
  console.log('Smurf.js props: ', props);
  const { name, age, height, id } = props.character;

  const handleDelete = event => {
    event.preventDefault();
    alert(id);
    props.deleteCharacter(id);
  };

  return (
    <div className='smurf-character'>
      <h1>I'm {name} smurf!</h1>
      <h4>I'm {age} years old.</h4>
      <h4>I'm {height} cm tall.</h4>
      <button>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isDeleting: state.isDeleting
  };
};

export default connect(
  mapStateToProps,
  { deleteCharacter }
)(Smurf);
