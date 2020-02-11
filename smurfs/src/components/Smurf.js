import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSmurf } from '../actions/index';

const Smurf = (props) => {

    const smurfs = useSelector(state => state.smurfs);
    const dispatch = useDispatch();
    
    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteSmurf(e.target.value))
    }

    return (

        <div className = "smurf" >
           
            <h2> {props.smurf.name} </h2>
                <p>Age: {props.smurf.age} </p>
                <p>Height: {props.smurf.height}</p>
            
            <button className = "delete-button" onClick = {handleDelete} value = {props.smurf.id}>Delete {props.smurf.name} smurf</button>

    </div>
    )
}

export default Smurf;