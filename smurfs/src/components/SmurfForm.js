import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addNewSmurf, editSmurf } from '../store/actions'

export default function SmurfForm(props) {
    const {isEditing} = useSelector(state => ({
        isEditing: state.editingSmurf,
        smurfToEditId: state.smurfToEditId
    }))

    const dispatch = useDispatch()
    
    const blankForm = {
        name: '',
        age: '',
        height: ''
    }

    const [newSmurf, setNewSmurf] = useState(blankForm)
    const [error, setError] = useState(null)

    const handleChange = (e) => {
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value} )
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const atLeast1EmptyField = Object.values(newSmurf).some(field => field === '')
        if (isEditing) {
            if (atLeast1EmptyField ) {
                setError('You must fill out all the fields') 
            } else {
                dispatch(editSmurf(newSmurf))
                setNewSmurf(blankForm)
            }
        } else {
            if (atLeast1EmptyField ) {
                setError('You must fill out all the fields') 
            } else { 
                dispatch(addNewSmurf(newSmurf))
                setNewSmurf(blankForm)
            }
        }
    }
    
    return (
        <> { error && <p style={{color: "red"}}>{error}</p> }
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
        </>
    )
}