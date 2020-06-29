import React, { useState } from "react";
import { connect } from "react-redux";
import { pushInfo } from "../actions";

const SmurfForm = props => {
    const [smurf, setSmurf] = useState({ name: "", age: "", height: "" })


    const handleChanges = event => {
        setSmurf({ ...smurf, [event.target.name]: event.target.value });
        console.log("handleChanges function: ", event.target.name, event.target.value)
    };


    const handleSubmit = event => {
        event.preventDefault();
        props.pushInfo(smurf);
        setSmurf({ name: "", age: "", height: "" })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChanges}
                    value={smurf.name}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    onChange={handleChanges}
                    value={smurf.age}
                />
                <input
                    type="text"
                    name="height"
                    placeholder="Size"
                    onChange={handleChanges}
                    value={smurf.height}
                />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isPushing: state.isPushing,
        error: state.error
    };
};

export default connect(mapStateToProps, { pushInfo })(SmurfForm);