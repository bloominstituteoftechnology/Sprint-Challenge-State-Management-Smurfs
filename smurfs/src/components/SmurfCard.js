import React from 'react'

// const DeleteSmurf = () => {
//     alert('You should never delete a Smurf')
// }

//need to pass props in here
const SmurfCard = props => {
    return (
        <div>
            <h1>{props.smurf.name}</h1>
            <h3>{props.smurf.age}</h3>
            <h3>{props.smurf.height}</h3>
            {/* Add onClick Remove on button */}
            {/* <button onClick={DeleteSmurf()}>delete</button> */}
        </div>
    )
}

export default SmurfCard