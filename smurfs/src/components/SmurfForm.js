import React, { useState, useContext } from 'react';
import axios from 'axios';

import { SmurfContext } from '../context/SmurfContext';


export const SmurfForm = () => {

    const [ smurf, setSmurf ] = useContext(SmurfContext);
    const [ postForm, setPostForm ] =useState({
        // name: '',
        // age: undefined,
        // height: '',
        // id: undefined
    })

    const handleChange = (e) => {
        e.preventDefault()
        setPostForm({ ...postForm, [e.target.name]:e.target.value })
    }

    const handleSubmit = () => {
        axios
            .post(`http://localhost:3333/smurfs`, postForm)
            .then(res => {

                console.log('SmurfForm > handleSubmit:', res)

                setPostForm({
                    name: '',
                    age: undefined,
                    height: '',
                    id: Date.now()
                })
                setSmurf([ ...smurf, res.data])
            })
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Smurf Creator</h2>
            <input 
                type='text'
                name='name'
                placeholder='Name'
                value={postForm.name}
                onChange={handleChange}
            />
            <input 
                type='number'
                name='age'
                placeholder='Age'
                value={postForm.age}
                onChange={handleChange}
            />
            <input 
                type='text'
                name='height'
                placeholder='Height'
                value={postForm.height}
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}