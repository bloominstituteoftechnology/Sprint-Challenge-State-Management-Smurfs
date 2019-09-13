import React from "react";

function Smurf() {
  return (
    <div className="Smurf">
      <ul>
        {this.props.smurfs.map(smurf => (
          <li key={smurf.name} smurf={smurf}>
            <h1>{smurf.name}</h1>
            <p>{smurf.age} age</p>
            <p>{smurf.height} height </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Smurf;
