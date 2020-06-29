import {useState} from 'react';
import {send_smurf, get_smurfs, put_smurf} from "../actions";
import { connect } from 'react-redux';
import React from 'react';
const initialValues = {
    name:'',
    age:0,
    height:'',
    id: 0
};
export const useForm = props =>{
    const [values, setValues] = useState(initialValues);

    const smurfSender = () =>{ send_smurf()};



    const handleChanges = (e) =>{
        console.log('in handle change')
        console.log('state in useform is ', values)
        setValues({ ...values, [e.target.name]:e.target.value});
        // setValues(values.name= e.target.value);
    };

    const handleSubmit = (e) =>{

        console.log('props are ', props)
        console.log('handle submit');
        console.log('values before submit are ', values)
       send_smurf({name:values.name, age:parseInt(values.age), height: values.height});
        get_smurfs();
    };

    

    return[handleChanges, values, handleSubmit, setValues]
}
