import React from "react";
import { connect } from "react-redux";

const SmurfList = props => {
    return (
        <div>
            {props.smurfs.map(item => {
                return (
                    <div>
                        <p>Name: {item.name}</p>
                        <p>Age: {item.age}</p>
                        <p>Height: {item.height}</p>
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