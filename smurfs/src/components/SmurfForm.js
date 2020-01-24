import React, { useState } from 'react';

const SmurfForm = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });
    console.log(newSmurf);
    console.log(props);

    const handleSubmit = e => {
        e.preventDefault();
        props.addSmurf(newSmurf);
    };

    const handleChanges = e => {
        console.log("handleChanges");
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    onChange={handleChanges}
                    value={newSmurf.name} />
                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    onChange={handleChanges}
                    value={newSmurf.age} />
                <input
                    type="text"
                    name="height"
                    placeholder="height"
                    onChange={handleChanges}
                    value={newSmurf.height}
                />
                <button type="submit">Create Smurf</button>
            </form>
        </div>
    );
};

export default SmurfForm;