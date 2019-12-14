// simple get request

import React, { useContext } from 'react';
import { SmurfContext } from './contexts/SmurfContext';

const SmurfList = () =>  {
    const smurfdata = useContext(SmurfContext);

    return (
        <div className="more-smurfs">
          {smurfdata.map((element, index) => 
          <div key={index} >
              <h1>{element.name}</h1>
              <h2>{element.age}</h2>
              <h3>{element.height}</h3>
        </div>)}
        </div>
    )
}

export default SmurfList;

    

    