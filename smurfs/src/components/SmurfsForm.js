import React, {useState, useContext} from 'react'
import { SmurfsContext } from '../contexts/SmurfsContext'


function SmurfsForm() {

    const [ smurfForm, setSmurfForm  ] = useState({ name:'', age: 0, height:'' })
    const { postRequest } = useContext(SmurfsContext)


const handleOnchange = (e) => {

    setSmurfForm({...smurfForm, [e.target.name]: e.target.value })
    
}

const handleSubmit = (e) => {
    e.preventDefault()
    postRequest(smurfForm)
    e.target.reset()
    
}

    return (

        <form onSubmit={handleSubmit}>
            <h1>Add a new Smurf</h1>
            <label>
                <input name='name' type='text' values={smurfForm} onChange={handleOnchange} placeholder='name'></input>
            </label>
            <label>
                <input name='age' type='number' values={smurfForm} onChange={handleOnchange} placeholder='age'></input>
            </label>
            <label>
                <input name='height' type='text' values={smurfForm} onChange={handleOnchange} placeholder='height in cm'></input>
            </label>
            <label>
                <button type='submit'>ADD</button>
            </label>
        </form>
    )
}

export default SmurfsForm;
