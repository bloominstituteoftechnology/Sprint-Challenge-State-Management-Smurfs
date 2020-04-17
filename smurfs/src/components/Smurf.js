import React from 'react'


const Smurf = (props)=>{
    return(
        <div className = 'smurf'>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <h3>{props.height}</h3>
        </div>
    )
}
export default Smurf;