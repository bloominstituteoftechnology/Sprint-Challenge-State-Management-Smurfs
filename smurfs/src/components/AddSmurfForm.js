import React, { useState } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions/actions";

const AddSmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => setNewSmurf({
        ...newSmurf,
       [e.target.name]: e.target.value
    })

    return (
        <form onSubmit={e => props.addSmurf(e, newSmurf)}>
            <input className="add-input" type="text" name="name" placeholder="Enter smurf name" value={newSmurf.name} onChange={handleChanges} />
            <input className="add-input" type="text" name="age" placeholder="Enter smurf age" value={newSmurf.age} onChange={handleChanges} />
            <input className="add-input" type="text" name="height" placeholder="Enter smurf height" value={newSmurf.height} onChange={handleChanges} />
            <button className="add-button">Add Smurf</button>
        </form>
    )
}


export default connect(null, { addSmurf })(AddSmurfForm)