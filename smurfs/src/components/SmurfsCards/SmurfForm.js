import React, {useEffect, useState}from 'react'
import styled from 'styled-components'
import axios from 'axios';

function SmurfForm() {
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });


    function handleChange(e){
        setSmurf({
            ...smurf,
            [ e.target.name ] : e.target.value
        })
    }
    function handleSubmit(){

        axios.post('http://localhost:3333/smurfs', smurf)
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
        setSmurf({
            name: '',
            age: '',
            height: ''
        })
    }
    return (
        <Styles>
            <form onSubmit={handleSubmit}>
                <input placeholder='Smurf Name' type='text' name='name' value={smurf.name} onChange={handleChange}/>
                <input placeholder= 'Smurf Age' type='text' name='age' value={smurf.age} onChange={handleChange}/>
                <input placeholder='Smurf Height' type='text' name='height' value={smurf.height} onChange={handleChange}/>
                <button>Summit</button>
            </form>
        </Styles>
    )
}

export default SmurfForm

const Styles = styled.div`
    form{
        display: flex;
        flex-direction: column;
        width: 400px;
    }
`;