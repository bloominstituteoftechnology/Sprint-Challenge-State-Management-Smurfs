import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";


const SmurfForm = (errors, touched, values, status) => {
const [smurfs, setSmurfs] = useState([]);    

    useEffect(status => {
        if (status){
            setSmurfs([...smurfs, status]);}
    }, [status]);

     return (
        <div className='smurfForm'>
            <Form>
                <Field
                    component='input'
                    type='text'
                    name='name'
                    placeholder='Enter Smurf Name'
                    />
                    {touched.name&& errors.name&& (<p>{errors.name}</p>)}
                <Field
                    component='input'
                    type = 'number'
                    name = 'age'
                    placeholder = 'Enter Smurf Age'
                    />
                    {touched.age && errors.age && (<p>{errors.age}</p>)}
                <Field
                    component='input'
                    type = 'text'
                    name = 'height'
                    placeholder = 'Enter Smurf Height'
                    />
                    {touched.height && errors.height &&(<p>{errors.height}</p>)}
                    <button type='submit'>Submit Smurf</button>
            </Form>  
            {smurfs.map(smurf => (
                <p>{smurfs.name}</p>
            ))}
        </div>
    )
}


const formicHOC = withFormik({
    mapPropsToValues({name, age, height}){
        return{
            name: name || "",
            age: age || "",
            height: height || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
        .required("Smurf Name is required"),
        age: Yup.number()
        .required("Smurf Age is required"),
        height: Yup.string()
        .required("Smurf Height is required")
    }),
    handleSubmit(values, {setSmurfs, resetForm}){
        axios
        .post("http://localhost:3333/smurfs", values)
        .then(res => {
            console.log(res);
            setSmurfs(res.data);
            resetForm();
        })
        .catch(err => console.log("Error: ", err))
    }
}); 

const UserFormWithFormik = formicHOC(SmurfForm);

export default UserFormWithFormik;