import React from "react"


export const Smurf = props => {
    console.log("SMURFS POROPS",props.data)
    return(
        <div>
               <p>Name:{props.data.name}</p>
                <p>Age:{props.data.age}</p>
                <p>Height:{props.data.height}</p>      
        </div>
    )
}