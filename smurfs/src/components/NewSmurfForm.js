import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../store/actions/index';

const NewSmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    });

    const changeHandler = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name] : e.target.value 
        });
    };

    const submitForm = e => {
        e.preventDefault();
    };

    return (
        <div className='smurfForm'>
            <form onSubmit={submitForm}>
                <label htmlFor='name' className='name-input'>
                    Name:
                    <input
                    name='name'
                    id='name'
                    type='text'
                    onChange={changeHandler}
                    value={newSmurf.name}
                    />
                </label>
                <label htmlFor='age' className='age-input'>
                    Age:
                    <input
                    name='age'
                    id='age'
                    type='text'
                    onChange={changeHandler}
                    value={newSmurf.age}
                    />
                </label>
                <label htmlFor='height' className='height-input'>
                    Height:
                    <input
                    name='height'
                    id='height'
                    type='text'
                    onChange={changeHandler}
                    value={newSmurf.height}
                    />
                </label>
                <button className='addBtn' type='submit' onClick={()=> props.postSmurf(newSmurf)}>Add Smurf</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf
    };
};

export default connect(
    mapStateToProps,
    { postSmurf }
)(NewSmurfForm);
