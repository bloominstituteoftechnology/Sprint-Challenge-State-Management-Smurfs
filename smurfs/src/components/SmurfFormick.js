// import React, { useState, useEffect } from 'react';
// import { withFormik, Form, Field } from 'formik';
// import * as yup from 'yup';


// const SmurfFormick = ({ errors, touched, status }) => {
//   console.log(status)
//     const [newSmurf, setNewSmurf] = useState ({
//       name: "",
//       age: "",
//       height: "", 
//       id: ""
//     })

//   console.log(newSmurf)

//   const handleChanges = (e) => {
//     setNewSmurf ({
//       ...newSmurf,
//       [e.target.name]: e.target.value
//     })
//   }

// useEffect(() => {
//     if (status) {
//       console.log(newSmurf)
//       setNewSmurf([ ...newSmurf, status ])
//     }
//   }, [newSmurf, status])

//   return (
//     <Form>
//     {touched.name && errors.name && <p className='error'>{errors.name}</p>}
//     <Field type="text" name="name" onChange={handleChanges} value={newSmurf.name} placeholder="Smurf Name" />

//        {touched.age && errors.age && <p className='error'>{errors.age}</p>}
//       <Field type="number" name="age" onChange={handleChanges} value={newSmurf.age} placeholder="Smurf Age" />

//        {touched.height && errors.height && <p className='error'>{errors.height}</p>}
//       <Field type="number" name="height" onChange={handleChanges} value={newSmurf.height} placeholder="Smurf Height" />

//     {touched.id && errors.id && <p className='error'>{errors.id}</p>}
//       <Field type="number" name="id" onChange={handleChanges} value={newSmurf.id} placeholder="Smurf Id" />

//     <button type="submit">Submit</button>

//     </Form>
//   )
// }

// export default withFormik({
   
//     mapPropsToValues: ({ name, age, height }) => {
//       return {
//         name: name || '',
//         age: age || '',
//         height: height || ''
//         // id: values.id || ''       
//         }
//     },

//     validationSchema: yup.object().shape({
//       name: yup.string().required('Name is required'),
//       age: yup.number().positive().required('Age is required'),
//       height: yup.string().required("Height is required")
//       // id: yup.number().positive().required('Id is required'),
//       }),

//   })(SmurfFormick);
//   // put post within action component.