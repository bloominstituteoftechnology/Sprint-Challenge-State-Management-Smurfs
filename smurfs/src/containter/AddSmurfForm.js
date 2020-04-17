import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function AddSmurfForm(props, addSmurf) {
    console.log('AddSmurfForm: ', props, addSmurf);

    const [formState, setFormState] = useState({
        name: '',
        age: '',
        height: '',
    });
    const [error, setError] = useState({
        name: '',
        age: '',
        height: '',
    });
    const [post, setPost] = useState([]);
    const [greyButton, setButtonOn] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted!');
        axios
            .post('https://reqres.in/api/users', formState)
            .then((res) => {
                setPost(res.data);
                console.log('success', post);

                setFormState({
                    name: '',
                    age: '',
                    height: '',
                });
            })
            .catch((err) => {
                console.log(err.res);
            });
    };
    const inputChange = (event) => {
        event.persist();
        const newerFormData = {
            ...formState,
            [event.target.name]:
                event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value,
        };
        setFormState(newerFormData);
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name:
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Smurf name here"
                    value={formState.name}
                    onChange={inputChange}
                />{' '}
                {error.name.length > 0 ? (
                    <p className="error">{error.name}</p>
                ) : null}
            </label>
            <br />
            <label htmlFor="age">
                Age:
                <input
                    id="age"
                    type="text"
                    name="age"
                    placeholder="Enter the age"
                    value={formState.age}
                    onChange={inputChange}
                />{' '}
                {error.age.length > 0 ? (
                    <p className="error">{error.age}</p>
                ) : null}
            </label>
            <br />
            <label htmlFor="height">
                Height:
                <input
                    id="height"
                    type="text"
                    name="height"
                    placeholder="Height in cm"
                    value={formState.height}
                    onChange={inputChange}
                />{' '}
                {error.height.length > 0 ? (
                    <p className="error">{error.height}</p>
                ) : null}
            </label>
            <br />

            {/* <label htmlFor="email">
                Email:
                <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="age"
                    value={formState.email}
                    onChange={inputChange}
                />
                {error.email.length > 0 ? (
                    <p className="error">{error.email}</p>
                ) : null}
            </label>
            <br />
            <label>
                Password:
                <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={inputChange}
                    value={formState.password}
                />
                {error.password.length > 0 ? (
                    <p className="error">{error.password}</p>
                ) : null}
            </label> */}
            <br />
            <pre>{JSON.stringify(post, null, 2)}</pre>

            <button disabled={greyButton}>Submit</button>
        </form>
    );
}
