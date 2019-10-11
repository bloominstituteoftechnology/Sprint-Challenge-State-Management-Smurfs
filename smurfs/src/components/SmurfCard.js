import React from "react";

function SmurfCard(props) {
    console.log(props.smurf)
    
    return (
        <div>
            <h1>{props.smurf.name} Smurf</h1>
            <h2>{props.smurf.age}</h2>
            <h2>{props.smurf.height}</h2>
        </div>
    )
}

export default SmurfCard