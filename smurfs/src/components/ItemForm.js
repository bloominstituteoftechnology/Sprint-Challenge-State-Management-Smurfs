import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { addData, patchData, deleteData } from "../actions";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    width: 200px;
    align-items: center;
    margin: 30px auto;
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
const formFields = {
    name: "",
    height: "",
    age: ""
}

const ItemForm = ({ addData, patchData, edit, deleteData }) => {
    const [ form, setForm ] = useState(formFields)
    useEffect(() => {
        if (edit) {
            setForm(edit)
        } else if (edit === undefined) {
            setForm(formFields)
        }
    }, [edit])

    const handleOnChange = (e) =>  {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        if (edit) {
            patchData(form)
        } else {
            addData(form)
        }
    }
    const handleDelete = () => {
        deleteData(edit.id)
    }
    return (
        <div>
            <StyledForm onSubmit={e => handleOnSubmit(e)}>
                <label>Name</label>
                <input name="name" value={form.name} onChange={e => handleOnChange(e)}/>
                <label>Height</label>
                <input name="height" value={form.height} onChange={e => handleOnChange(e)}/>
                <label>Age</label>
                <input name="age" value={form.age} onChange={e => handleOnChange(e)}/>
                <button type="submit">Submit</button>
            </StyledForm>
            {edit && <button onClick={() => handleDelete()}>Delete</button> }
        </div>
    )
}

const mapStateToProps = state => ({ edit: state.edit })

export default connect(mapStateToProps, {addData, patchData, deleteData })(ItemForm);