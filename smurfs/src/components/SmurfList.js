import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from "../actions/action";
import SmurfForm from "./SmurfForm";

const SmurfList = props =>{
    const initSmurfs = props.getSmurfs
    useEffect(() =>{
        initSmurfs()
    }, [initSmurfs])

    return (
        <div>
            <div>
                {props.smurf.map(smurf =>(
                    <p key={smurf.id}>
                        {smurf.name} - Age: {smurf.age}, Height: {smurf.height}
                    </p>
                ))}
            </div>
            <SmurfForm addSmurfs = {props.addSmurfs}/>
        </div>
    );
};

const mapStateToProps = state =>{
    return({
        smurf: state.smurf,
        error:state.error
    })
};

export default connect (mapStateToProps,{getSmurfs, addSmurf})(SmurfList);