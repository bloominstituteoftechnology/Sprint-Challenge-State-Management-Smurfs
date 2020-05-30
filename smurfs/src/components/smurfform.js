import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'


function SmurfForm(){
    const [smurfInfo, setSmurfInfo] = useState({
        name:'',
        age: '',
        height:'',
        id: Date.now(),
    }) 

    const handleChange = e => {
        e.preventDefault();
        setSmurfInfo({
            ...smurfInfo,
            [e.target.name] : e.target.value
        });  
    };

    const handleSubmit = e => {
        // e.preventDefault();
            axios
            .post('http://localhost:3333/smurfs', smurfInfo)
            .then(res =>{
                console.log('AA', res)
            })
            .catch(err=> {
                console.log(err)
            })
    }
    return (
        <div >
            
                <h2>Add Your Smurf Info</h2>
        
            
            <form onSubmit = {handleSubmit}>
                <input
                    type="text"
                    value={smurfInfo.name}
                    placeholder="Your Smurf Name"
                    name="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={smurfInfo.age}
                    placeholder="Your Smurf Age"
                    name="age"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={smurfInfo.height}
                    placeholder="Your Smurf Height"
                    name="height"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add Smurf to Smurf List</button>
            </form>
        </div>
    )
}

export default SmurfForm;
