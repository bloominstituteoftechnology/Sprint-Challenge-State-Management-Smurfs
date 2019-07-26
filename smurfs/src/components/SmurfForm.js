import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import { Button, Form, Grid, Icon, Segment, Header } from 'semantic-ui-react'
import * as Yup from "yup";
import axios from 'axios'

//redux
import { useDispatch, useSelector} from 'react-redux'


const SmurfForm = (props) => {
    console.log(props)
    // const[token, SetToken] = useLocalStorage('token')
    // const[error, setError] = useState(false)

    return (

        <Formik 
        
            initialValues = {{
                name: "",
                age: "",
                height: "",
                image: "",
                description: ""
            }}
            onSubmit={(values, actions,) => {
                console.log(values)
            }}

            // validationSchema={UserSignUpSchema}
        
            render = {({ values, handleSubmit, handleChange, errors, touched, isSubmitting, ...props }) => (
                // <Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center' divided stackable>
                    
                    // <Grid.Column width={6}>
                        <Segment>

                            <Form onSubmit={handleSubmit} size='big'>

                                <Form.Input   
                                    type="text"
                                    name="name"
                                    placeholder="Smurf Name"
                                    value={values.name}
                                    onChange={handleChange}
                                    // error={touched.username && errors.username}
                                />

                                <Form.Input
                                    type="text"
                                    name="age"
                                    placeholder="Enter Smurf Age"
                                    value={values.age}
                                    onChange={handleChange}
                                    // error={touched.password && errors.password}
                                />

                                <Form.Input
                                    type="text"
                                    name="height"
                                    placeholder="Enter Smurf Height"
                                    value={values.height}
                                    onChange={handleChange}
                                    // error={touched.password && errors.password}
                                />

                                <Form.Input
                                    type="text"
                                    name="image"
                                    placeholder="Enter Image Link"
                                    value={values.image}
                                    onChange={handleChange}
                                    // error={touched.password && errors.password}
                                />

                                <Form.TextArea
                                    // type="text"
                                    name="description"
                                    placeholder="Enter Description"
                                    value={values.description}
                                    onChange={handleChange}
                                    // error={touched.password && errors.password}
                                />

                                <Button 
                                    color='black' 
                                    animated
                                    type='submit' 
                                    fluid
                                    loading={isSubmitting}
                                    size='big'
                                >
                                    <Button.Content visible>Login</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>                                
                                </Button>

                                {/* {error && <Header color='red' size='small'>Error ... Sever Not Found!</Header>} */}

                            </Form>

                        </Segment>
                    // </Grid.Column>
                // </Grid>
            )}        
        
        />
    )
}

// const UserSignUpSchema = Yup.object().shape({

//     username: Yup.string()
//         .min(3, 'Not Long Enough')
//         .max(15, 'Slow Down Partner')
//         .required('You must participate if you want the goods'),
//     password: Yup.string()
//         .min(3, 'Not Long Enough')
//         .max(15, 'Slow Down Partner')
//         .required('You must participate if you want the goods')
// })

export default SmurfForm;    