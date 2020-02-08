import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index.js'

import { useDispatch } from "react-redux";
import { postSmurf } from "../actions";

const SmurfsForm = props => {
const [name , setName] = useState("");
const [age, setAge] = useState();
const [height, setHeight] =useState();

const dispatch = useDispatch();

    const handleNameChanges = e =>{
        setName(e.target.value)
        
    }
    const handleAgeChanges = e =>{
        setAge(e.target.value)
        
    }
    const handleHeightChanges = e =>{
        setHeight(e.target.value)
        
    }
        const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
          postSmurf({
            name: name,
            age: age,
            height: `${height}cm`,
            id: Date.now()
          })
        );
        setName(``);
        setAge(``);
        setHeight(``);
      };

    return <>
    <h2>Add smurf form</h2>
    <form  onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            onChange={handleNameChanges}
            placeholder="Add name"
        />

        <input
            type="number"
            value={age}
            onChange={handleAgeChanges}
            placeholder="Add age"
        />
        <input
            type="number"
            value={height}
            onChange={handleHeightChanges}
            placeholder="Add height"
        />
        <button>Submit new member</button>
        {props.isFetchingData ? (
                 <div>Data is loading ...</div>
             ) : (
                <button onClick={handleGetData} >Show all the members</button>)}
    </form>
    
         </>
    }

const mapStateToProps = state => {
    return {
        isFetchingData:state.isFetchingData
    };
};

export default connect (mapStateToProps, {getData }) (SmurfsForm);