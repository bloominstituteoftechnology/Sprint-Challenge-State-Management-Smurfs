import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {fetchSmurf} from '../store/fetchSmurf'
import axios from 'axios'
import Smurf from './Smurf'
import Form from './Form'

const Smurfs = (props) => {
    useEffect(()=>{
        props.fetchSmurf();
        console.log(props.smurfs)
    },[])
    const [formValue, setFormValue] = useState({
        name: '',
        age: '',
        height: '',
      })
      const onInputChange = event =>{
        const changedInput = event.target.name;
        const newValue = event.target.value;
        setFormValue({
          ...formValue,
          [changedInput]: newValue,
        })
      }
      const onSubmit = event=>{
        event.preventDefault();
    
        const newSmurf = {
          name: formValue.name,
          age: formValue.age,
          height: formValue.height,
          
        }
        axios
        .post('http://localhost:3333/smurfs',
        {...newSmurf})
        .then(res=>{
          console.log(res)
          props.fetchSmurf();
          setFormValue({
            name: '',
            age: '',
            height: '',
          })
        })
    }

    return(
        <div>
            {props.isFetching && (<p>smurfs</p>)}
            {props.smurfs.length > 0 && (props.smurfs.map((smurf)=>(
                <Smurf
                name = {smurf.name}
                age = {smurf.age}
                height = {smurf.height}
                />
            )))}
            {props.error && (<p>{props.error}</p>)}
            <Form
        onInputChange = {onInputChange}
        onSubmit = {onSubmit}
        formValue = {formValue}
        />
        </div>
    )
}
const mapStateToProps = state =>{
    console.log(state)
    return{
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchSmurf}
)(Smurfs);