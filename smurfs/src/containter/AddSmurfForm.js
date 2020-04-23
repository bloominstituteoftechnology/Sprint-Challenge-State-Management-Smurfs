import React, { useState } from 'react';
import { pushInfo, fetchInfo } from '../actions';
import { connect } from 'react-redux';
import axios from 'axios';

// import { addSmurf } from '../containter/RetrieveMeThisTime';
// import axios from 'axios';

function AddSmurfForm(props) {
    console.log('AddSmurfForm: ', props);

    const [smurf, setSmurf] = useState();

    const handleChanges = (event) => {
        event.preventDefault();
        const newerSmurfData = {
            ...smurf,
            [event.target.name]: event.target.value,
        };
        return setSmurf(newerSmurfData);
    };
    const submitForm = (event) => {
        // event.preventDefault();
        console.log('submit clicked: ', smurf);
        props.pushInfo(smurf);
        // pushInfo(smurf);

        // return (dispatch) => {
        //     axios
        //         .post('http://localhost:3333/smurfs', smurf)
        //         .then((res) => {
        //             dispatch({ type: 'POST_INFO_START', payload: res });
        //             console.log('response: ', res);
        //         })
        //         .catch((error) => console.error(error));
        // };
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
            <label htmlFor="id">
                <input
                    type="hidden"
                    id="id"
                    name="id"
                    value={Math.random() * 10000}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
            {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
        </form>
    );
}
const mapStateToProps = (state) => {
    console.log('addsmurfform state;', state);
    return {
        // push: state.push.info,
    };
};

export default connect(mapStateToProps, { fetchInfo, pushInfo })(AddSmurfForm);
