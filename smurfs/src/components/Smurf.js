import React, { useState } from 'react';
import { connect } from 'react-redux';
import { editSmurf } from '../actions/index';


const Smurf = props => {

    const [name] = useState('');
    const [age] = useState('');
    const [height] = useState('');

    const editHandler = e => {
        let edit = {
            name: name,
            age: age,
            height: height
        }
        props.editSmurf(edit)
    };
    return (
        <form onChange ={editHandler}>
        <div className="smurf">
            <p>{`Name: ${props.name} `}</p>
            <p>{`Age: ${props.age}`}</p>
            <p>{`Height: ${props.height}`}</p>
            <button type="submit">Delete</button>
            <button type="submit">Edit</button>
        </div>
        </form>
    )
}

export default connect(null, { editSmurf })(Smurf); 