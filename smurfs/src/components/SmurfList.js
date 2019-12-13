import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function getSmurf() {
    const [form, setForm] = useState({
        name: '',
        age: '',
        height: ''
    })

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => this.setState({
            smurfs: res.data
            console.log(res)
            }))
        .catch(err => console.log('smurf error', err))

        return (
            <div className="App">
                <h1>Smurfs</h1>
            </div>
            );
        }