import React, { useState, useEffect } from "react";

const Form = (props)=> {
    const {name, age, height} = props;
    return(
    <form onSubmit={props.handleSubmit}>
        <input placeholder='Name' name='Name' value={name} onChange={props.handleNameChange} />
        
        <input placeholder='Age' name='Age' value={age} onChange={props.handleAgeChange} />
        
        <input placeholder='Height' name='Height' value={height} onChange={props.handleHeightChange} />
        
        <button onClick={props.handleSubmit}>Submit</button>
    </form>
    )
}

export default Form