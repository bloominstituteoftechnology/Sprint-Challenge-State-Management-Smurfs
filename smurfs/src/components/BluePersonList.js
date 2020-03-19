import React, { useContext } from 'react';

import BluePersonCard from './BluePersonCard';
import { SmurfContexts } from '../contexts/SmurfContexts';

const BluePersonList = () => {
  const smurfPerson = useContext(SmurfContexts);

  console.log(smurfPerson);

  return (
    <div>
      {smurfPerson.length > 0 && smurfPerson.map(smurf =>       
        <BluePersonCard smurf={smurf}/>
      )}
    </div>
  )
};

export default BluePersonList;