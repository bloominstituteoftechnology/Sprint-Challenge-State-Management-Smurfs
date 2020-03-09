import React, {useState, dispatch} from 'react';
import {connect} from 'react-redux';
import {ADD_SMURF, Reducer} from './Reducer';
import {addSmurf} from './Actions';

const Form = (props) => {
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");

    const handleName = (e) =>{
        e.preventDefault();
        setName(e.target.value);
    }
    
    const handleAge = (e) =>{
        e.preventDefault();
        setAge(e.target.value);
    }

    const handleHeight = (e) =>{
        e.preventDefault();
        setHeight(e.target.value);
    }

    const addSmurf = (e) =>{
        e.preventDefault()
        const axios = require('axios')
        axios.post('http://localhost:3333/smurfs', {
        name: name,
        age: age,
        height: height
    })
        .then(response =>{
            console.log(response)
            dispatch(props.addSmurf(response))
        })
        .catch(err=>{
            console.log(err)
        })
    }
 return(
    <div>
        <form>
            <input onChange={handleName} type="text" placeholder="Enter name of smurf" />
            <input onChange={handleAge} type="text" placeholder="Enter age of smurf"/>
            <input onChange={handleHeight} type="text" placeholder="Enter height of smurf"/>
            <button type="submit" onClick={addSmurf}>Submit</button>
        </form>
    </div>
)
}

const mapStateToProps = state =>{
    return {
        name: state.name,
        height: state.height,
        age: state.age
    }
}

export default connect(mapStateToProps, {addSmurf})(Form);