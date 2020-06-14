import React, { useContext } from 'react';
import { sContext } from '../contexts';

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
}


const Sform = () => {
    //grab context
    const { sVals, onChange, onSubmit } = useContext(sContext);

    return (
        <form style={formStyle} onSubmit={onSubmit}>
            <input name='name'placeholder='name'value={sVals.name} onChange={onChange} />
            <input name='age' placeholder='age'value={sVals.age} onChange={onChange} />
            <input name='height' placeholder='height' value={sVals.height} onChange={onChange} />
            <button>Add Smurf</button>
        </form>
    );
};

export default Sform;