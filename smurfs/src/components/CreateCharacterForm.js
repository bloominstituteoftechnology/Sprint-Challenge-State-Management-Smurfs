import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postCharacter, fetchCharacters } from '../actions';

const CreateCharacterFrom = props => {
  console.log('CreatCharForm.js props: ', props);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  const newCharacter = {
    name: name,
    age: age,
    height: height
  };

  const handleName = event => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleAge = event => {
    event.preventDefault();
    setAge(event.target.value);
  };

  const handleHeight = event => {
    event.preventDefault();
    setHeight(event.target.value);
  };

  const submitCharacter = event => {
    event.preventDefault();
    console.log(newCharacter);
    props.postCharacter(newCharacter);
    props.fetchCharacters();
    clearFields();
  };

  const clearFields = () => {
    setName('');
    setAge('');
    setHeight('');
  };

  return (
    <div className='creact-character-form-container'>
      <form onSubmit={submitCharacter} action=''>
        <label htmlFor='name'>Name:</label>
        <input name='name' type='text' value={name} onChange={handleName} />
        <label htmlFor='age'>Age:</label>
        <input name='age' type='number' value={age} onChange={handleAge} />
        <label htmlFor='height'>Height:(cm)</label>
        <input
          name='height'
          type='number'
          value={height}
          onChange={handleHeight}
        />
        <button type='submit'>Create Character</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isPosting: state.isPosting
  };
};

export default connect(
  mapStateToProps,
  { postCharacter, fetchCharacters }
)(CreateCharacterFrom);
