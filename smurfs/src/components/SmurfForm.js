import React, { useState } from "react";


const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: ""
    });

    const handleChanges = e => {
        setNewSmurf(e.target.value);
    };

    const handleEdit = e => {
        e.preventDefault();
        // props.toggleEditing();
    };

    const handleSubmit = e => {
        e.preventDefault();
        setNewSmurf("");
        props.updateSmurf(newSmurf || props.smurf);
    };

    return (
        <div>
            {props.smurf ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="newSmurf"
                        placeholder={props.smurf}
                        value={newSmurf}
                        onChange={handleChanges}
                    />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                    <div>
                        <h1>{props.Smurf}</h1>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )}
        </div>
    );
};

export default SmurfForm;