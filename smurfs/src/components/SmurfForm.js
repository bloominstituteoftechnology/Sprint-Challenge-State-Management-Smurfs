import React,{useState} from "react";
import axios from 'axios';

function SmurfForm (){
const [smurfInfo, setSmurfInfo] = useState({
    name: '',
    age: Number,
    height: '',
    id: Number
  })
   
    const handleChange = e => {
    setSmurfInfo({ ...smurfInfo, [e.target.name]:e.target.value});
    };
      
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:3333/smurfs', smurfInfo)
        .then(res => {
            console.log("ADD smurf form", res)
            
        })
        .catch(err => {
            console.log("Erorr in addNewsmurf FORM", err)
        })
    }
    console.log("smurfinfo", smurfInfo)
    return (
        <div className="smurf-form">
            hello there
            <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'
                placeholder='Smurf Name'
                value={smurfInfo.name}
                onChange ={handleChange}
            />
            <input
                type='number'
                name='age'
                placeholder='smurfInfo age'
                value={smurfInfo.age}
                onChange ={handleChange}
            />
            <input
                type='number'
                name='height'
                placeholder='smurfInfo height'
                value={smurfInfo.height}
                onChange ={handleChange}
            />
            <button>Add Smurf</button>
            </form>
        </div>
    );
}

export default SmurfForm;