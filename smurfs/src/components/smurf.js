import React from 'react';



function smurf(props) {
    return (
        <div className="smurf-item">
      <h3>Name: {props.each.name}</h3>
      <p>Age: {props.each.age}</p>
      <p>Height: {props.each.height}</p>
      
    </div>
    )
}

export default smurf