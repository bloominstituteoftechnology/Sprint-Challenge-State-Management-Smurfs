import React, { useState } from 'react';
import axios from 'axios';

export function SmurfForm() {
    const [form, setForm] = useState({
        name: '',
        age: '',
        height: ''
    })

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            //sendData
            axios
            .post('http://localhost:3333/smurfs', form)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        }} >
             <input
                name='name'
                placeholder='Name to Add'
                value={form.name}
                onChange={(e) => {
                    setForm({
                        ...form,
                        [e.target.name]: e.target.value
                    })
                }}
            />

            <input
                name='age'
                placeholder='Age to Add'
                value={form.age}
                onChange={(e) => {
                    setForm({
                        ...form,
                        [e.target.name]: e.target.value
                    })
                }}
            />

            <input
                name='height'
                placeholder='Height to Add'
                value={form.height}
                onChange={(e) => {
                    setForm({
                        ...form,
                        [e.target.name]: e.target.value
                    })
                }}
            />
            <button type='submit'>Send Smurf</button>
        </form>
    )
}

