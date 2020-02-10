import React from "react";

const Smurfs=(props)=>{
    return(
        <div>
            <p>{props.name}</p>
           <p> {props.height}</p>
           <p> {props.age}</p>
        </div>
    )
}
export default Smurfs;