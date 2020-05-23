import React,{useState, useContext} from "react";
import axios from 'axios';
import FormContext from '../contexts/FormContext.js';

function SmurfForm (){

const addSmurf = useContext(FormContext)

const [smurfInfo, setSmurfInfo] = useState('')
   
    const handleChange = e => {
    setSmurfInfo({ ...smurfInfo, [e.target.name]:e.target.value});
    };
      
    const handleSubmit = (e) => {
       addSmurf(smurfInfo);
        axios
        .post('http://localhost:3333/smurfs', smurfInfo)
        .then(res => {
            console.log("ADD smurf form", res.data)
            setSmurfInfo(res.data)
        })
        .catch(err => {
            console.log("Erorr in addNewsmurf FORM", err)
        })
    }

    console.log("smurfinfo", smurfInfo)
    return (
            <div className="smurf-form">
            hello there
            <form onSubmit={ event => handleSubmit(event)}>
            <input
                type='text'
                name='name'
                placeholder='Smurf Name'
                value={smurfInfo.name}
                onChange ={event => handleChange(event)}
            />
            <input
                type='number'
                name='age'
                placeholder='smurfInfo age'
                value={smurfInfo.age}
                onChange ={event => handleChange(event)}
            />
            <input
                type='number'
                name='height'
                placeholder='smurfInfo height'
                value={smurfInfo.height}
                onChange ={event => handleChange(event)}
            />
            <button>Add Smurf</button>
            </form>
        </div>
    );
}

export default SmurfForm;