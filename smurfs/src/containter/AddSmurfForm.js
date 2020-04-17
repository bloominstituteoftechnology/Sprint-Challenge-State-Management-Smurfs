import React, { useState, useReducer } from 'react';

import axios from 'axios';

export default function AddSmurfForm(props, handleChanges, submitForm) {
    console.log('AddSmurfForm: ', props);

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
