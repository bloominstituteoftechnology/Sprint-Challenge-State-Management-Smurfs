import React from 'react';
import { useContext } from 'react'
import { SmurfContext } from '../contexts/SmurfContext.js'
import axios from 'axios'

const SmurfsC = () => {
    const { smurf } = useContext(SmurfContext);
    return (
        <div>
            <h1>Hello!</h1>
        </div>
    )
}

export default SmurfsC