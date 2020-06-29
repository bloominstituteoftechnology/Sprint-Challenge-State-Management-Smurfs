import React from "react";

const SmurfDisplay = props => {
    return (
        <div>
            <h2>{props.info.name}</h2>
            <p>{props.info.age}</p>
            <p>{props.info.height}</p>
        </div>
    );
};

export default SmurfDisplay;