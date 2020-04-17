import React, { useState, useReducer } from 'react';

import axios from 'axios';

export default function AddSmurfForm(
    props,
    addSmurf,
    handleChanges,
    submitForm
) {
    console.log('AddSmurfForm: ', props);

    //ACTION ADDED HERE//

    //END OF ACTION//

    // const [formState, setFormState] = useState({
    //     name: '',
    //     age: '',
    //     height: '',
    // });
    // const [error, setError] = useState({
    //     name: '',
    //     age: '',
    //     height: '',
    // });
    // const [post, setPost] = useState([]);
    // const [greyButton] = useState(false);

    // const submitForm = (e) => {
    //     e.preventDefault();
    //     console.log('form submitted!');
    //     axios
    //         .post('https://reqres.in/api/users', state)
    //         .then((res) => {
    //             setPost(res.data);
    //             console.log('success', post);

    //             setFormState({
    //                 name: '',
    //                 age: '',
    //                 height: '',
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err.res);
    //         });
    // };
    // // const handleChanges = (event) => {
    // //     event.persist();
    // //     const newerFormData = {
    // //         ...formState,
    // //         [event.target.name]:
    // //             event.target.type === 'checkbox'
    // //                 ? event.target.checked
    // //                 : event.target.value,
    // //     };
    // //     setFormState(newerFormData);
    // // };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">
                Name:
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Smurf name here"
                    value={props.name}
                    onChange={handleChanges}
                />{' '}
                {/* {error.name.length > 0 ? (
                    <p className="error">{error.name}</p>
                ) : null} */}
            </label>
            <br />
            <label htmlFor="age">
                Age:
                <input
                    id="age"
                    type="text"
                    name="age"
                    placeholder="Enter the age"
                    value={props.age}
                    onChange={handleChanges}
                />{' '}
                {/* {error.age.length > 0 ? (
                    <p className="error">{error.age}</p>
                ) : null} */}
            </label>
            <br />
            <label htmlFor="height">
                Height:
                <input
                    id="height"
                    type="text"
                    name="height"
                    placeholder="Height in cm"
                    value={props.height}
                    onChange={handleChanges}
                />{' '}
                {/* {error.height.length > 0 ? (
                    <p className="error">{error.height}</p>
                ) : null} */}
            </label>
            <br />

            <br />
            {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}

            <button>Submit</button>
        </form>
    );
}
