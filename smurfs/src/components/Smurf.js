import React, { useState } from "react";
import { connect } from "react-redux";

import { deleteSmurf, editSmurf } from "../actions/actions";

const Smurf = props => {
    const [editMode, setEditMode] = useState(false);
    const [smurfEdit, setSmurfEdit] = useState({
        name: props.smurf.name,
        age: props.smurf.age,
        height: props.smurf.height
    })

    const toggleEditMode = e => {
        e.preventDefault();
        setEditMode(!editMode);
    }

    const handleChanges = e => setSmurfEdit({
        ...smurfEdit,
        [e.target.name]: e.target.value
    })

    console.log(smurfEdit);

    return (
        <div className="smurfs">
            {/* section renders smurf name, age and height */}
            <section>
                <h3>{props.smurf.name}</h3>
                <p>age: {props.smurf.age}</p>
                <p>height: {props.smurf.height}</p>
            </section>

            {editMode && 
            <div>
                <input name="name" value={smurfEdit.name} onChange={handleChanges}  />
                <input name="age" value={smurfEdit.age} onChange={handleChanges}  />
                <input name="height" value={smurfEdit.height} onChange={handleChanges}  />
                <button onClick={e => props.editSmurf(e, props.smurf.id, smurfEdit)}>Confirm</button>
                <button onClick={toggleEditMode}>Cancel</button>
            </div>
            }
            
            {/* conditionally renders delete and edit button when editMode is falsy */}
            {!editMode && <button onClick={e => props.deleteSmurf(e, props.smurf.id)}>X</button>}
            {!editMode && <button onClick={toggleEditMode}>Edit</button>}
        </div>
    )
}


export default connect(null, { deleteSmurf, editSmurf })(Smurf);