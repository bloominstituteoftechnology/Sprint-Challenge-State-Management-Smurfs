import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addSmurf } from './actions/addSmurf';


const SmurfForm = () => {
    const dispatch = useDispatch();
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = item => e => {
        setNewSmurf({
                ...newSmurf,
                [item]: e.target.value
            });
    };

    
    const handleSubmit = e => {
        e.preventDefault();
        setNewSmurf({
            ...newSmurf,
            name:'',
            age: '',
            height: ''
        });
        dispatch(addSmurf(newSmurf));
    }
    

    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                Add a Smurf
                <input type='text'
                    placeholder='Name'
                    value={newSmurf.name}
                    onChange={handleChanges("name")}
                    required
                />
                <input type='text'
                    placeholder='Age'
                    value={newSmurf.age}
                    onChange={handleChanges("age")}
                    required
                />
                <input type='text'
                    placeholder='Height'
                    value={newSmurf.height}
                    onChange={handleChanges("height")}
                    required
                />
                <button className='add' type='submit' >Add {newSmurf.name} Smurf</button>
            </form>
        </div>
    );
}


export default SmurfForm;