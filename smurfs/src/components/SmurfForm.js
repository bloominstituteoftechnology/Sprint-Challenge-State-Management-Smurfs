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
                    name='smurfName'
                    placeholder='Enter Smurf Name'
                    />
                    {touched.smurfName && errors.smurfName && (<p>{errors.smurfName}</p>)}
                <Field
                    component='input'
                    type = 'text'
                    name = 'smurfAge'
                    placeholder = 'Enter Smurf Age'
                    />
                    {touched.smurfAge && errors.smurfAge && (<p>{errors.smurfAge}</p>)}
                <Field
                    component='input'
                    type = 'text'
                    name = 'smurfHeight'
                    placeholder = 'Enter Smurf Height'
                    />
                    {touched.smurfHeight && errors.smurfHeight &&(<p>{errors.smurfHeight}</p>)}
                    <button type='submit'>Submit Smurf</button>
            </Form>  
            {smurfs.map(smurf => (
                <p>{smurfs.smurfName}</p>
            ))}
        </div>
    )
}


const formicHOC = withFormik({
    mapPropsToValues({smurfName, smurfAge, smurfHeight}){
        return{
            smurfName: smurfName || "",
            smurfAge: smurfAge || "",
            smurfHeight: smurfHeight || ""
        };
    },
    validationSchema: Yup.object().shape({
        smurfName: Yup.string()
        .required("Smurf Name is required"),
        smurfAge: Yup.string()
        .required("Smurf Age is required"),
        smurfHeight: Yup.string()
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