import React, { useState, useEffect } from 'react';
import { SmurfsContext } from '../contexts/SmurfsContext';
import Smurfs from './Smurfs';
import SmurfsForm from './SmurfsForm';
import axios from 'axios';

const SmurfsContainer = () => {

    const initialState = {
        name: '',
        age: '',
        height: '',
    }

    const [form, setForm ] = useState(initialState);
    const [ smurfs, setSmurfs ] = useState([]);


    useEffect(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                setSmurfs(res.data)
            })
            .catch(err => {
                console.log('There was an error')
            })
    }, [])

    const handleChange = e => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const onSubmit = e => {
        e.preventDefault();
        axios
            .post('http://localhost:3333/smurfs', form)
            .then(res => {
                setSmurfs(res.data)
                setForm(initialState)
            })
            .catch(err => {
                console.log('There was an error')
            })
    }


    return (
        <div>
        <SmurfsContext.Provider value={{smurfs, form, handleChange, onSubmit}}>
        <div className='header'>
            <h1>Welcome to Smurf Village!</h1>
        </div>
            <Smurfs />
            <div className='footer'>
                <h1>Join our village!</h1>
               <SmurfsForm /> 
            </div>
        </SmurfsContext.Provider>
            
        </div>
    )
}

export default SmurfsContainer;