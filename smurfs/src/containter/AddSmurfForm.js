import React, { useState } from 'react';
import { pushInfo } from '../actions';
// import { addSmurf } from '../containter/RetrieveMeThisTime';
// import axios from 'axios';

export default function AddSmurfForm(props) {
    console.log('AddSmurfForm: ', props);

    const [smurf, setSmurf] = useState({});

    // const addSmurf = (smurf) => {
    //     let newId = 1;
    //     const newSmurf = {
    //         name: smurf.name,
    //         age: smurf.age,
    //         height: smurf.height,
    //         id: newId++,
    //     };
    //     setSmurf(newSmurf);
    // };

    const submitForm = (event) => {
        event.preventDefault();
        console.log(smurf);
        // addSmurf(smurf);
        pushInfo(smurf);
    };
    const handleChanges = (event) => {
        event.preventDefault();
        let idNum = 1;
        const newerSmurfData = {
            [event.target.name]: event.target.value,
            id: idNum++,
            ...smurf,
        };
        return setSmurf(newerSmurfData);
    };

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
            <button>Submit</button>
            {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
        </form>
    );
}
