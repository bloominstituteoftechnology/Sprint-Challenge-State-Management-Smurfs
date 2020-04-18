import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { addData } from "../actions";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    width: 200px;
    align-items: center;
    margin: 0 auto;
    button {
        width: 200px;
        margin: 10px auto;
    }
    label {
        display: flex;
        flex-direction: column;
        width: 200px;
        margin: 10px auto;
    }
`

const ItemForm = ({ addData }) => {
    const [ form, setForm ] = useState({})
    const handleOnChange = (e) =>  {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log(form)
        addData(form)
    }
    return (
        <StyledForm onSubmit={e => handleOnSubmit(e)}>
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={e => handleOnChange(e)}/>
            <label>Height</label>
            <input type="text" name="height" value={form.height} onChange={e => handleOnChange(e)}/>
            <label>Age</label>
            <input type="text" name="age" value={form.age} onChange={e => handleOnChange(e)}/>
            <button type="submit">Submit</button>
        </StyledForm>
    )
}

export default connect(undefined, {addData})(ItemForm);