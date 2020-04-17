import React from 'react';
import Smurf from './Smurf';

const SmurfList = ({ list }) => {
    console.log('SMURFLIST', list);
    return (
        <div className='listContainer'>
            {list && list.map(item => <Smurf key={item.id} item={item}/>)}
        </div>
    );
};

export default SmurfList;