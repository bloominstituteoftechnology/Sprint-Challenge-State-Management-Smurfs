import React, { useState, useEffect } from "react";

const SmurfList = (props)=> (
    <div className='smurf-cards'>
        {props.smurfs.map((smurf) => {
        return <div className='smurf-card' key={smurf.id}>
            <h2>{smurf.name}</h2>
            <h4>Age: {smurf.age}</h4>
            <h4>Height: {smurf.height}</h4>
        </div>
        })}
    </div>
)

export default SmurfList