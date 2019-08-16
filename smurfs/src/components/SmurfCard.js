import React from 'react';

const SmurfCard = props => {
  return (
    <div>
        <h1>Name: {props.SmurfList.name}</h1>
        <p> Height: {props.SmurfList.height}</p>
        <p> Age: {props.SmurfList.age}</p>
        <p>ID: {props.SmurfList.id}</p>
    </div>
  );
};

export default SmurfCard;
