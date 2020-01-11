  
import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

function FormComponent({ isSubmitting }) {
  return (
    <Form>
      <div>
        <Field type="text" name="name" placeholder="name" />
      </div>

      <div>
        <Field type="number" name="age" placeholder="age" />
      </div>

      <div>
        <Field type="text" name="height" placeholder="height" />
      </div>

      <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikFormComponent = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(`post values:`, values);
    axios
    .post("http://localhost:3333/smurfs", values)
    .then(res => {
        console.log(res); // Data was created successfully and logs to console
        resetForm();
        setSubmitting(false);
    })
    .catch(err => {
        console.log(err); // There was an error creating the data and logs to console
        setSubmitting(false);
    });
    }
})(FormComponent);

export default FormikFormComponent;