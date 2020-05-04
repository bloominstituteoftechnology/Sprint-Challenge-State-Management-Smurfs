import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from "../actions/action";
import SmurfForm from "./SmurfForm";

const SmurfList = props =>{
    const initSmurfs = props.getSmurfs;
    useEffect(() =>{
        initSmurfs()
    }, [initSmurfs]);

    return (
        <div>
            <div className = "smurfList">
                <SmurfForm addSmurf = {props.addSmurf}/>
                {props.smurf.map(smurf =>(
                    <div className ="eachSmurf" key={smurf.id}>
                        <p>Name: {smurf.name}</p>
                        <p>Age: {smurf.age}</p> 
                        <p>Height: {smurf.height}</p>
                    </div>
                ))}
            </div>
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