import React, { useContext, useEffect, useState } from 'react';

import { SmurfContexts } from './contexts/SmurfContexts';

function BluePersonCard() {
  const smurfPerson = useContext(SmurfContexts);

  // const [smurfPerson, setSmurfPerson] = useState({});

  // console.log(smurfPerson)

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3333/smurfs')
  //     .then(res => {
  //       console.log(res.data);
  //       setSmurfPerson(res.data);
  //     })
  //     .catch(err => {
  //       console.log("No smurfs", err);
  //     })
  // }, []);

  console.log(smurfPerson.name);

  return (
    <div>
      <h1>{smurfPerson.name}</h1>
    </div>
  )
};

export default BluePersonCard;
