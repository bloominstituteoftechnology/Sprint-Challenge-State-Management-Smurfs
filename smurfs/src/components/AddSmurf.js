import React from 'react';
import { connect } from 'react-redux';
import { submitNewSmurf, updateNewSmurfAge, updateNewSmurfHeight, updateNewSmurfName } from '../actions';

const AddSmurf = props => {
    return (
        <div>
            <h2>Add a Smurf to the Village*</h2>

            <form>
                <label>
                    Name:
                    <input type="text" name="name" onChange={props.updateNewSmurfName} />
                </label>
                <label>
                    Age:
                    <input type="number" name="age" onChange={props.updateNewSmurfAge} />
                </label>
                <label>
                    Height:
                    <input type="text" name="height" onChange={props.updateNewSmurfHeight} />
                </label>
                <input type="submit" value="Submit" onSubmit={props.submitNewSmurf} />
            </form>
            <h4>*All Fields Required </h4>
        </div>
    )
}

const mapStateToProps = state => {
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
)(AddSmurf);