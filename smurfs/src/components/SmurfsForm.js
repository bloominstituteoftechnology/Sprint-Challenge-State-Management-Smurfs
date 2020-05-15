import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postData } from '../store/actions'

let initialState = {
    name: '',
    age: 0,
    height: '',
    id: Date.now()
}

let SmurfsForm = props => {
    let [input, setInput] = useState(initialState)
    console.log(input)

    let handleChanges = e => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    let onSubmit = e =>{
        e.preventDefault();
        props.postData(input);
        setInput({
            name: '',
            age: '',
            height: '',
        })
    }
    // let newObj = {
    //     name: 'newname',
    //     age: 2,
    //     height: 'newheight',
    //     id: Date.now()
    // }

    // axios.post('http://localhost:3333/smurfs', newObj)


    // let addSmurf = smurfData => {
    //     let newSmurf = {
    //         name: smurfData.name,
    //         age: smurfData.age,
    //         height: smurfData.height,
    //     }
    //     axios.post('http://localhost:3333/smurfs', newSmurf)
    //     .then(res => {
    //         console.log(res, 'res from post')
    //     })
    // }

    // let onSubmit = e => input => {
    //     e.preventDefault();
    //     props.postData(input)
    //     // addSmurf(input);
    //     setinput(initialState)
    // }

    return (
        <form onSubmit={e => onSubmit(e)} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <label htmlFor='name'>Name :</label>
            <input 
            values={input.name} 
            onChange={handleChanges} 
            style={{width: '30%'}} 
            type='text'
            id='name' 
            name='name'
            />

            <label htmlFor='age'>Age :</label>
            <input 
            values={input.age} 
            onChange={handleChanges} 
            style={{width: '30%'}} 
            type='number'
            id='age' 
            name='age'
            />

            <label htmlFor='height'>Height :</label>
            <input 
            values={input.height} 
            onChange={handleChanges} 
            style={{width: '30%'}} 
            id='height' 
            name='height'
            type='text'
            />

            <button>Submit</button>
        </form>
    )
}

export default connect(null, {postData})(SmurfsForm);