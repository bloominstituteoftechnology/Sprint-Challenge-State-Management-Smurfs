import React, {useContext,useState} from 'react'
import {DataContext} from '../context/DataContext'

import styled from 'styled-components'
const Form = styled.form `
width:40%;
margin:0 auto;
display:flex;
flex-direction:column;
text-align:center;
background:darkgray;
input{
    text-align:center;
    padding:.7%;
    border-radius:3px;
    margin:1% 0;


}
button{
    width:70%;
    margin:1% auto;
    border-radius:6px;
    padding:1%;

}

`

export default function SmurfForm(props) {
    const database = useContext(DataContext)

    //form scheme
    const initial = {
        id:database.data.length + 1,
        name:'',
        height:'',
        age:''
        
    }
    //state for the form 
     const [value,setvalue]=useState(initial)
    
     const inputHandle = evt=>{
         setvalue({...value,[evt.target.name] : evt.target.value})
     }
    

    const add = (e)=>{
        e.preventDefault()
        database.addToDatabase(value)
        setvalue(initial)
    }
    return (
        <Form onSubmit={add}>
        <h2>Add Your Smurf To the Village</h2>

            <input name ='name'
            value={value.name}  
            onChange={inputHandle} 
            placeholder='Smurf Name'/>

            <input name ='age'
             value={value.age} 
              onChange={inputHandle} 
              placeholder='Smurf Age'/>

            <input name ='height' 
            value={value.height} 
            onChange={inputHandle} 
            placeholder='Smurf Height'/>

            <button onClick={add}>send</button>
        </Form>
    )
}
