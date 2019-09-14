import React from "react";
import axios from "axios"
import {Form, Field, withFormik} from "formik"
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    MainForm: {
        display: "flex",
        flexDirection: "column",
        margin: " 20px auto ",
        width: "500px",
        alignItems: "center"
    },
    Field: {
        width: "200px",
        height: "20px",
        textAlign: "center",
        padding: "5px",
        margin: "10px"
    },
    FieldEdits: {
        marginTop: "-10px",
        marginBottom: "-10px",
        color: "#e52103",
        fontSize: ".7rem",
        fontWeight: "bold"
    },
    Button: {
        margin: "30px auto",
        width: "100px",
        padding: "5px 10px",
        color: "#00b9ef",
        border: "2px solid #e52103",
        borderRadius: "10px"
    }
  });

const SmurfForm = ({errors, touched}) => {
    const classes = useStyles();
    return (
        <>
            <Form className = {classes.MainForm}>
                <Field className = {classes.Field} type= "text" name = "name" placeholder = "Smurf's Name"></Field>
                {touched.name && errors.name && <p className = {classes.FieldEdits} >{errors.name}</p>}
                <Field className = {classes.Field} type= "text" name = "age" placeholder = "Smurf's Age"></Field>
                {touched.age && errors.age && <p className = {classes.FieldEdits}>{errors.age}</p>}
                <Field className = {classes.Field} type= "text" name = "height" placeholder = "Smurf's Height"></Field>
                {touched.height && errors.height && <p className = {classes.FieldEdits}>{errors.height}</p>}
                <div>
                <button className = {classes.Button} type="submit">Add To Family</button>
                </div>
            </Form>
        </>
    )
}

const FormikSmurfForm = withFormik({
    mapPropsToValues({name, age, height}){
        return {
            name: name || "",
            age: age || "",
            height: height || "",
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Name is required"),
        age: Yup.string().required("Age is required" ),
        height: Yup.string().required("height is required" )
    }),
    handleSubmit(values, {resetForm}){
        axios
            .post("http://localhost:3333/smurfs", values)
            .then(res => {
                console.log(res);
                alert("Smurf has been created!")
            })
            .catch(err => console.log(err))
        resetForm()
    }

})(SmurfForm);

export default FormikSmurfForm;