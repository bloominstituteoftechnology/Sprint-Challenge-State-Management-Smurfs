import React, { useState } from 'react';
import axios from 'axios';

let initialState = {
    name: '',
    age: '',
    height: '',
}

let SmurfsForm = props => {
    let [input, setinput] = useState(initialState)
    console.log(input)

    let handleChanges = e => {
        let name = e.target.name;
        let value = e.target.value;
        setinput({[name]: value})
    }

    let addSmurf = smurfData => {
        let newSmurf = {
            name: smurfData.name,
            age: smurfData.age,
            height: smurfData.height,
            id: Date.now()
        }
        axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(res => {
            console.log(res, 'res from post')
        })
    }

    let onSubmit = e => {
        e.preventDefault();
        addSmurf(input);
        setinput(initialState)
    }

    return (
        <form onSubmit={onSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label htmlFor='name'>Name :</label>
            <input values={input.name} onChange={handleChanges} style={{width: '30%'}} id='name' name='name'/>

            <label htmlFor='age'>Age :</label>
            <input values={input.age} onChange={handleChanges} style={{width: '30%'}} id='age' name='age'/>

            <label htmlFor='height'>Height :</label>
            <input values={input.height} onChange={handleChanges} style={{width: '30%'}} id='height' name='height'/>

            <button>Submit</button>
        </form>
    )
}

export default SmurfsForm;