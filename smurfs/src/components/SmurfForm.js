import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addNewSmurf } from '../store/actions'

export default function SmurfForm(props) {
    const dispatch = useDispatch()
    
    const blankForm = {
        name: '',
        age: '',
        height: ''
    }

    const [newSmurf, setNewSmurf] = useState(blankForm)

    const handleChange = (e) => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value} )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNewSmurf(newSmurf))
        setNewSmurf(blankForm)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="name"
                type="text" 
                placeholder="name" 
                onChange={handleChange}
                value={newSmurf.name} 
            />
            <input 
                name="age"
                type="text" 
                placeholder="age" 
                onChange={handleChange}
                value={newSmurf.age} 
            />
            <input 
                name="height" 
                type="text" 
                placeholder="height" 
                onChange={handleChange}
                value={newSmurf.height} 
            />
            
            <button type="submit">+</button>
        </form>
    )
}