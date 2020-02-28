import React, { useContext } from 'react';

import { SmurfContexts } from './contexts/SmurfContexts';

function BluePersonCard() {
  const smurfPerson = useContext(SmurfContexts);

  console.log(smurfPerson)

  return (
    <div>
      <p>
        <div>
          {smurfPerson.map(smurf => (
          <h1>{smurf.name}</h1>
        ))}
        </div>
      </p>
      {/* {smurfPerson.map(smurf => {
       <div>
          <BluePersonCard 
            key={smurf.id}
            name={smurf.name}
          />
        </div>  
      })} */}
    </div>
  )
};

export default BluePersonCard;
