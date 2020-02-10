import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions/index';

const AddSmurf = props => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
             [e.target.name]: e.target.value
         });
     };
    

    const handleSubmit = e => {
        e.preventDefault();

        props.addSmurf(newSmurf);
        setNewSmurf({
            name: '',
            age: '',
            height: ''
        });
    };

    return (
    <>
        <input type='text' name='name' value={newSmurf.name} onChange={handleChanges} placeholder='smurf name'/>
        <input type='text' name='age' value={newSmurf.age} onChange={handleChanges} placeholder='smurf age'/>
        <input type='text' name='height' value={newSmurf.height} onChange={handleChanges} placeholder='smurf height'/>
        <button className='button' onClick={handleSubmit}>Add smurf</button>
    </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        name: state.name,
        age: state.age,
        height: state.height
    }
};

export default connect(
    mapStateToProps,
    { addSmurf }
)(AddSmurf); 