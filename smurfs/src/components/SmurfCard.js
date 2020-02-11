import React, { useState } from "react";
import { connect } from "react-redux";

import { newSmurf } from "../actions/Actions";

const SmurfCard = props => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleChange = event => {
        setSmurf({
            ...smurf, [event.target.name]: [event.target.value]
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.newSmurf(smurf);
        setSmurf({
            name: "",
            age: "",
            height: ""
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>Name:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="name"
                    placeholder="Enter Name"
                    value={smurf.name}
                />

                <label>Age:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="age"
                    placeholder="Enter Age"
                    value={smurf.age}
                />

                <label>Height:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    name="height"
                    placeholder="Enter Height"
                    value={smurf.height}
                />

                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps, { newSmurf })(SmurfCard);