import React, { useContext } from 'react';

import { SmurfContexts } from '../contexts/SmurfContexts';

function BluePersonCard() {
  const smurfPerson = useContext(SmurfContexts);

  console.log(smurfPerson);

  return (
    <div>
      <h3>Smurfs in your village:</h3>
      {/* {smurfPerson.map(smurf => 
        <div>
          (<h1>{smurf.name}</h1>)
        </div>    
      )} */}
    </div>
  )
};

export default BluePersonCard;
