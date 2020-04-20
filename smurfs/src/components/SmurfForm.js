import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import useInput from './useInput';
import {addSmurf} from '../actions/actions';
import {connect} from 'react-redux';

const SmurfForm = (props) => {
    const {register} = useForm()
    const [name,setName,handleName] = useInput('')
    const [age,setAge,handleAge] = useInput('')
    const [height,setHeight,handleHeight] = useInput('')

    const handleSubmit = e => {
        e.preventDefault()
        const data = {
            name: name,
            age: Number(age),
            height: height
          }
        //   console.log(data)
          props.addSmurf(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>name</label>
                <input type='text' name="name" value={name} onChange={e => handleName(e.target.value)} ref={register}></input>
                <label>age</label>
                <input type='text' name="age" value={age} onChange={e => handleAge(e.target.value)} ref={register}></input>
                <label>height</label>
                <input type='text' name="height" value={height} onChange={e => handleHeight(e.target.value)} ref={register}></input>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default connect(()=>{},{addSmurf})(SmurfForm);
