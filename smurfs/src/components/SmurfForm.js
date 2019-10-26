import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios'

const SmurfForm = ({ errors, touched, status }) => {
    const [smurfs, setSmurfs] = useState ([])


useEffect(() => {
    if (status) {
      setSmurfs([ ...smurfs, status ])
    }
  }, [status])

  return (
    <Form>
    {touched.name && errors.name && <p className='error'>{errors.name}</p>}
    <Field type="text" name="name" placeholder="Smurf Name" />

       {touched.age && errors.age && <p className='error'>{errors.age}</p>}
    <Field type="number" name="age" placeholder="Smurf Age" />

       {touched.height && errors.height && <p className='error'>{errors.height}</p>}
    <Field type="number" placeholder="Smurf Height" />

    {touched.id && errors.id && <p className='error'>{errors.id}</p>}
    <Field type="number" placeholder="Smurf Id" />

    <button type="submit">Submit</button>

    {smurfs.map(smurf => (
           <div>Species: {smurf.name}</div>
         ))}
    </Form>
  )
}

export default withFormik({
   
    mapPropsToValues: (values) => {
      return {
        name: values.name || '',
        age: values.age || '',
        height: values.height || '',
        id: values.id || ''       
        }
    },

    validationSchema: yup.object().shape({
      name: yup.string().required('Name is required'),
      age: yup.number().positive().required('Age is required'),
      height: yup.string().required("Height is required"),
      id: yup.number().positive().required('Id is required'),
      }),

    handleSubmit: (values, { setStatus }) => {
      axios.post("http://localhost:3333/smurfs", values)
      .then((resp) => {
        setStatus(resp.data)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
     }
  })(SmurfForm);