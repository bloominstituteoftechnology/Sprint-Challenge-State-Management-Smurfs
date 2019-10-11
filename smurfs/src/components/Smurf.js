import React from 'react';

const Smurf = ({ character }) => {
  const { name, age, height, id } = character;

  return (
    <div className='smurf-character'>
      <h1>I'm {name} smurf!</h1>
      <h4>I'm {age} years old.</h4>
      <h4>I'm {height} cm tall.</h4>
    </div>
  );
};

export default Smurf;
