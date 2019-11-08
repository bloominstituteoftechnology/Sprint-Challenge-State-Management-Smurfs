import React, { useState } from "react";
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';


const SmurfForm = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const nameChangeHandler = e => {
        setName(e.target.value)
    };

    const ageChangeHandler = e => {
        setAge(e.target.value)
    };

    const heightChangeHandler = e => {
        setHeight(e.target.value)
    }

    const submitHandler = e => {
        let newSmurf = {
            name: name,
            age: age,
            height: height
        }
        props.addSmurf(newSmurf)
    };

   
    return (
        <form onChange ={submitHandler}>
            <input onChange ={nameChangeHandler} type="text" value={name} placeholder="name"/>
            <input onChange ={ageChangeHandler}  type="text" value={age} placeholder="age"/>
            <input onChange ={heightChangeHandler} type="text" value={height} placeholder="height"/>
            <button type="submit">Add New Smurf</button>
         
        </form>
    )
}

export default connect(null, { addSmurf })(SmurfForm); 