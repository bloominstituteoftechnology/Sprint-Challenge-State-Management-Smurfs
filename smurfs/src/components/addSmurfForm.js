import React, { useContext } from 'react';

import { useForm } from '../hooks/handleHook';

import { SmurfContext } from '../contexts/SmurfContext';

const AddSmurf = () => {
    const { dispatch } = useContext(SmurfContext);

    const { fields, submit, handleChanges } = useForm(() => dispatch({ type: "ADD_SMURF", payload: fields }));

    return (
        <form onSubmit={submit}>
            <input type="text" name="name" onChange={handleChanges} placeholder="Add Smurf" />
            <input type="text" name="age" onChange={handleChanges} placeholder="age" />
            <input type="text" name="height" onChange={handleChanges} placeholder="height" />
            <button>submit</button>
        </form>
    )
}

export default AddSmurf;