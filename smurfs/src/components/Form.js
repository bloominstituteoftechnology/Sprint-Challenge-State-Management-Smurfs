import React, { useContext, useState } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

export default function Form() {

    const { addSmurfToAPI } = useContext(SmurfContext);

    const [ smurf, newSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChange = e => {
        newSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = e => {
        console.log(smurf)
        e.preventDefault();
        addSmurfToAPI(smurf)

    };

    

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='What`s your smurfin` name?' onChange={handleChange} value={smurf.name}></input>
            <input type='text' name='age' placeholder='What`s your smurfin` age?' onChange={handleChange} value={smurf.age}></input>
            <input type='text' name='height' placeholder='How smurfin` tall are ya?' onChange={handleChange} value={smurf.height}></input>
            <button>Submit</button>
        </form>
    )
}