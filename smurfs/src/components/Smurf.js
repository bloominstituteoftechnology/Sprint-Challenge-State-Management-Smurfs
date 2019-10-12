import React from 'react';

//props passed from Village
const Smurf = ({smf}) => {
  //console.log(`Smurf props`, props)
  return (
  <div>
  <p>Name: {smf.name}</p>
  <p>Age: {smf.age}</p>
  <p>Height: {smf.height}</p>
  </div>
  )
};

export default Smurf;

