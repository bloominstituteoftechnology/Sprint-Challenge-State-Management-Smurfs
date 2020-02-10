import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const POST_DATA = "POST_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS"
export const UPDATE_NEW_SMURF_NAME = "UPDATE_NEW_SMURF_NAME";
export const UPDATE_NEW_SMURF_AGE = "UPDATE_NEW_SMURF_AGE";
export const UPDATE_NEW_SMURF_HEIGHT = "UPDATE_NEW_SMURF_HEIGHT";
export const UPDATE_NEW_SMURF_ID = "UPDATE_NEW_SMURF_ID";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    setTimeout(() => {
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('get request result', res);
                dispatch({ type: UPDATE_SMURFS, payload: res.data })
            })
            .catch(err => {
                console.log('error', err)
                dispatch({ type: SET_ERROR, payload: "error fetching data from api" })
            })
    }, 2000);
};

export const submitNewSmurf = (e) => dispatch => {
    e.preventDefault();
    dispatch({ type: POST_DATA });
    console.log('in the post')
    setTimeout(() => {
        axios
            .post('http://localhost:3333/smurfs')
            .then(
                dispatch({ type: ADD_NEW_SMURF })
            )
            .catch(err => {
                console.log('error', err)
                dispatch({ type: SET_ERROR, payload: "error fetching posting/adding a smurf to smurfList" })
            })
    }, 2000);
}

//Change Functions
export const updateNewSmurfName = (event) => dispatch => {
    dispatch({ type: UPDATE_NEW_SMURF_NAME, payload: event.target.value });
}
export const updateNewSmurfAge = (event) => dispatch => {
    dispatch({ type: UPDATE_NEW_SMURF_AGE, payload: event.target.value });
}
export const updateNewSmurfHeight = (event) => dispatch => {
    dispatch({ type: UPDATE_NEW_SMURF_HEIGHT, payload: event.target.value });
}

/* //Old Submit Function
export const submitNewSmurf = (e) => dispatch => {
    dispatch({ type: ADD_NEW_SMURF, payload: e.target.value });
    dispatch({ type: UPDATE_NEW_SMURF_ID, payload: Date.now() });
} */