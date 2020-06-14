import React from 'react';

const Scard = props => {
  return (
    <div>
      <h3>{props.name} </h3>
      <p> {props.height} </p>
      <p> {props.age} </p>
      <button onClick={e => props.kill(props.id)}> Kill Smurf </button>
    </div>
  );
};

export default Scard;