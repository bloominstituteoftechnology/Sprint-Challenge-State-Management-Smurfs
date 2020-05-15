import React, {useContext,useState} from 'react'
import {DataContext} from '../context/DataContext'


export default function SmurfForm(props) {
    const database = useContext(DataContext)
    const initial = {
        id:database.data.length + 1,
        name:'',
        height:'',
        age:''
        
    }
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
        <form onSubmit={add}>
            <input name ='name'value={value.name}  onChange={inputHandle} placeholder='Smurf Name'/>
            <input name ='age' value={value.age}  onChange={inputHandle} placeholder='Smurf Age'/>
            <input name ='height' value={value.height} onChange={inputHandle} placeholder='Smurf Height'/>

            <button onClick={add}>send</button>
        </form>
    )
}
