import React, { useState } from "react";
import SmurfCard from "./SmurfCard";
import { connect } from "react-redux";

const Smurf = props => {
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
        props.addSmurf(smurf);
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
                    onChange={handleChange}
                    name="name"
                    placeholder="Enter Name"
                    value={smurf.name}
                />

                <label>Age:</label>
                <input
                    onChange={handleChange}
                    name="age"
                    placeholder="Enter Age"
                    value={smurf.age}
                />

            <label>Height:</label>
                <input
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

export default connect(mapStateToProps, { addSmurf })(Smurf);