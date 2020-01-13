import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/actions';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import './App.css'


const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('handlesubmit new smurf', newSmurf)
        props.addSmurf(newSmurf)
    }

    const handleChanges = (e) => {
        let name = e.target.name;
        setNewSmurf({
            ...newSmurf,
            [name]: e.target.value
        })
    }
    
    return (
        <div>
            <form className='form'>
                <TextField variant="outlined" name='name' type='text' placeholder='Smurf Name' onChange={handleChanges}></TextField>
                <br></br>
                <TextField variant="outlined"  name='age' type='text' placeholder='Smurf Age' onChange={handleChanges}></TextField>
                <br></br>
                <TextField variant="outlined"  name='height' type='text' placeholder='Smurf Height' onChange={handleChanges}></TextField>
                <br></br>
                <br></br>
                <Button variant="contained" color='primary' size='large' type='submit' onClick={handleSubmit} startIcon={<SaveIcon />}>Save your smurf</Button>
                <br></br>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(Form);