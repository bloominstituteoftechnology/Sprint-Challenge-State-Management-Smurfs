import React from "react";
import { connect } from "react-redux";

const SmurfList = props => {
    return (
        <div>
            {props.smurfs && props.smurfs.map(smurf => {
                return (
                    <div>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p>
                        <p>Height: {smurf.height}</p>
                    </div>
                );
            })}
        </div>
    );
};


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps, {})(SmurfList);