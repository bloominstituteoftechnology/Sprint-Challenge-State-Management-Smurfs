import {connect} from "react-redux";
import React, {useState} from 'react';
import {updateSmurf} from "./smurfAction";


const SmurfCard = props => {
    console.log(props)
    const [newSmurfName, setNewSmurfName] = useState({
        id: props.id,
        name: '',
    })


    const handleChange = e => setNewSmurfName({...newSmurfName, [e.target.name]: e.target.value});

    const handleSubmit = async e => {
        e.preventDefault();
        await props.updateSmurf(props);
        props.history.push();
    }


    return (
        <div className="village">
       <div class='smurf-card'>
           
        <h2> {props.name}</h2>
        <h3>HISTORY: {props.age} yeahrs </h3>
        <p>STATURE: {props.height}cm</p>
        <h4>ID: {props.id}</h4>

        <form onSubmit={handleSubmit}>
        <label>Update Name</label>
        <input type='text' name='name' id={props.id} onChange={props.handleChange} />
        <button type='submit'>Submit</button>
        </form>
       </div>
       </div>
 )
}


export default SmurfCard;

