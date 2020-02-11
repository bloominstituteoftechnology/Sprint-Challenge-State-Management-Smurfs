import React, { useContext } from 'react';
import { smurfContexts } from './contexts/smurfContexts';

function BluePersonCard() {
  const bluePerson = useContext(smurfContexts);

  console.log(bluePerson.name);

  return (
    <div>
      <h1>{bluePerson.name}</h1>
    </div>
  )
};

export default BluePersonCard;
