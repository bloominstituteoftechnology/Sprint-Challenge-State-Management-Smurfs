import React, {useState} from 'react';
import axios from 'axios';
import {Button} from 'reactstrap';
import styled from 'styled-components'


// Styles
const FormContainer = styled.div`
width:75%;
margin: 30px auto;

`

const Input = styled.input`
padding:5px;
`
const Label = styled.label`
font-weight:bold;
padding:5px;
`



const Form = (props) =>{
    const [newSmurf, setNewSmurf] = useState({})


const handleChange =(event) => {
    setNewSmurf({...newSmurf, [event.target.name] : event.target.value})
// console.log(newSmurf)
};

const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then((response) => {
        console.log(response)
    }).catch(err => console.log(err, 'error posting to smurf api'))
};


    return(
        <FormContainer className='form-container'>
            <form onSubmit={handleSubmit} >
                <Label>
                Name:
                <Input
                    name='name'
                    type='text'
                    placeholder='Name'
                    onChange={handleChange}
                    value= {newSmurf.name}
                />
                </Label>
                <Label>
                Age:
                <Input
                    name='age'
                    type='text'
                    placeholder='Age'
                    value={newSmurf.age}
                    onChange={handleChange}
                />
                </Label>
                <Label>
                Height:
                <Input
                    name='height'
                    type='text'
                    placeholder='Height'
                    value={newSmurf.height}
                    onChange={handleChange}
                />
                </Label>
                <Button color= "danger" type='submit'>Create A New Smurf</Button>
            </form>
        </FormContainer>
    );
};

export default Form;