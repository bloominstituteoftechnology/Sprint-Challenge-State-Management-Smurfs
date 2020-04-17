import React from 'react'

export const Smurfs = (props) => {
    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>{props.data.age}</p>
            <p>{props.data.height}</p>
        </div>
    )
}
