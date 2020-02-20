import React, { useContext } from 'react';

import { SmurfContexts } from './contexts/SmurfContexts';

function BluePersonCard() {
  const smurfPerson = useContext(SmurfContexts);

  console.log(smurfPerson)

  return (
    <div>
      <h1>{smurfPerson.data.name}</h1>
    </div>
  )
};

export default BluePersonCard;
