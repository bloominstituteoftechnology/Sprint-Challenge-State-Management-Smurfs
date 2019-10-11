import React from 'react';
import { useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext.js'




const SmurfsC = () => {
    const { smurf } = useContext(SmurfContext);


    // console.log("in SmursC", smurf)


    return (
        <div>
            <h1>Hello!</h1>
            {smurf.map(sm => (
                <div>
                    <h1>{sm.name}</h1>
                    <h2>{sm.age}</h2>
                    <h2>{sm.height}</h2>
                </div>
            ))}
            {/* {console.log("in return", smurf.name)} */}
        </div>
    )
}

export default SmurfsC