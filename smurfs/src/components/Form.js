import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { addSmurfs } from '../actions';


const Form = (props) => {

   const [datos, setDatos] = useState({ name : '', age : '', height : ''})
 

   const handleChange = (e) => {
    switch(e.target.name){
        case 'name':
            setDatos({
                ...datos,
                name: e.target.value
            })
        break;
        case 'height':
            setDatos({
                ...datos,
                height: e.target.value
            })
        break;
        case 'age':
            setDatos({
                ...datos,
                age: e.target.value
            })
        break;
        default:
    }
   }

   const handleSubmit = (e) =>{
    e.preventDefault()
    if (datos.name && datos.height && datos.age){
        axios.post('http://localhost:3333/smurfs', {
            name: datos.name,
            height: datos.height,
            age: datos.age
        }).then(res=>{
            props.addSmurfs(res.data)
            setDatos({
                name: '',
                height: '',
                age: ''
            })
        })

    } else {
        alert('All fields are required')
    }
}


   return (
    <div className="add-form">
        <form onSubmit={handleSubmit} name="add-form">
            <input onChange={handleChange} value={datos.name} name="name" placeholder="Name" type="text"/>
            <input onChange={handleChange} value={datos.height} name="height" placeholder="Height" type="text"/>
            <input onChange={handleChange} value={datos.age} name="age" placeholder="Age" type="text"/>
            <button>Add</button>
        </form>
    </div>
)

}














export default connect(
    state => { 
    return { };
  }, 
      { addSmurfs : addSmurfs } 
  )(Form);