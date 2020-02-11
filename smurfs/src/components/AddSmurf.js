import React, { useState } from 'react';

const AddSmurf = props => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        console.log("handleChanges");
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        props.submitNewSmurf(newSmurf);
    };
    return (
        <div>
            <h2>Add a Smurf to the Village*</h2>

            <form onSubmit={submitForm}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChanges} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" onChange={handleChanges} />
                </label>
                <label>
                    Height:
                    <input type="text" name="height" onChange={handleChanges} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h4>*All Fields Required </h4>
        </div>
    )
}
export default AddSmurf;
/* const mapStateToProps = state => {
    return {
        smurfList: state.smurfList,
        error: state.error,
        isFetchingData: state.isFetchingData,
        isUpdating: state.isUpdating
    }
}

export default connect(
    mapStateToProps,
    { submitNewSmurf, updateNewSmurfAge, updateNewSmurfHeight, updateNewSmurfName }
)(AddSmurf); */