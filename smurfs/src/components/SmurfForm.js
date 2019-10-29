import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addSmurf } from '../actions/smurf';

const SmurfForm = props => {
    const dispatch = useDispatch()
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        height: "",
        age: ""
    });

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    };

    // const handleEdit = e => {
    //     e.preventDefault();
    // };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addSmurf(newSmurf)
        )
        setNewSmurf({
            name: "",
            height: "",
            age: ""
        });
        // props.updateSmurf(newSmurf || props.smurf);
    };

    return (
        <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newSmurf.name}
                        onChange={handleChanges}
                    />
                <input
                    type="text"
                    name="height"
                    placeholder="Height"
                    value={newSmurf.height}
                    onChange={handleChanges}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={newSmurf.age}
                    onChange={handleChanges}
                />
                    <button type="submit">Submit</button>
                </form>
    
            {/* (
                    <div>
                        <h1>{props.Smurf}</h1>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                ) */}
        </div>
    );
};

export default SmurfForm;