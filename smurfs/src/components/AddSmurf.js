import React, { useState, useContext } from 'react';
import { SmurfsContext } from './SmurfsContext'

const AddSmurf = props => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [smurfs, setSmurfs] = useContext(SmurfsContext);

    const updateName = e => {
        setName(e.target.value)
    }

    const updateAge = e => {
        setAge(e.target.value)
    }

    const updateHeight = e => {
        setHeight(e.target.value)
    }

    const addSmurf = e => {
        e.preventDefault()
        if (name && age && height) {
            setSmurfs(prevSmurfs => [...prevSmurfs, { name: name, age: age, height: height }])
        }
    }

    return (
        <div className='add-smurf' >
            <form className='add-form' onSubmit={addSmurf} >
                <h1>Add Smurf (W/O Post)</h1>
                <input
                    placeholder='Name'
                    type='text'
                    name='name'
                    value={name}
                    onChange={updateName}
                />
                <input
                    placeholder='Age'
                    type='text'
                    age='age'
                    value={age}
                    onChange={updateAge}
                />
                <input
                    placeholder='Height'
                    type='text'
                    name='name'
                    value={height}
                    onChange={updateHeight}
                />
                <button className='add-btn' >Create Smurf</button>
            </form>
        </div>
    )
}

export default AddSmurf;