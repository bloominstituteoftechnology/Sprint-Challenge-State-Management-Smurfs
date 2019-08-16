import React from 'react';
import { useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext.js'
import axios from 'axios'



const SmurfsC = () => {
    const { smurf, setSmurf } = useContext(SmurfContext);

    axios.get('http://localhost:3333/smurfs')
    .then(response => {
        // console.log(response.data)
        setSmurf(response.data)
    })
    .catch((err) => {console.log("error in smurf axios")})



    return (
        <div>
            <h1>Hello!</h1>
        
        </div>
    )
}

export default SmurfsC