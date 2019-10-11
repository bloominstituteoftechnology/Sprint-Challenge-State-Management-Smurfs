import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';
import Smurf from './Smurf';

const SmurfList = props => {
  console.log('SmurfList.js', props);
  useEffect(() => {
    props.fetchCharacters();
  }, []);

  if (props.isFetching) {
    return <div className='laoding'>Getting your smurfs...</div>;
  } else
    return (
      <div className='smurf-list-container'>
        <h1> SMURFLIST </h1>
        {props.characters.map(character => (
          <Smurf key={character.id} character={character} />
        ))}
      </div>
    );
};

const mapStateToProps = state => {
  return {
    characters: state.characters,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchCharacters }
)(SmurfList);
