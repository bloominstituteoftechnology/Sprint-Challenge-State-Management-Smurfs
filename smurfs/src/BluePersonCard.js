import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { SmurfContexts } from './contexts/SmurfContexts';

function BluePersonCard() {
  const smurfPerson = useContext(SmurfContexts);

  return (
    <div>
      <h1>{smurfPerson.name}</h1>
    </div>
  )
};

export default BluePersonCard;
