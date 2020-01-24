import React, { useContext } from 'react';
import { SmurfContext } from '../context/context'

import Smurf from './Smurf';

const List = props => {
  const { smurfs, deleteSmurfs } = useContext(SmurfContext);

  return (
    <div className='SmurfsList'>
      {smurfs && smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} deleteSmurf={deleteSmurfs} />)}
    </div>
  );
};

export default List;