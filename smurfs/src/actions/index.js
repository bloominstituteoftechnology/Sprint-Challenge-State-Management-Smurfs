import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({
        type: FETCH_DATA
    });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
            console.log("============", res);
            dispatch({
                type: UPDATE_SMURFS,
                payload: res.data
            });
        })
        .catch(err => {
            console.error("error from fetching data from API", err);
            dispatch({
                type: SET_ERROR,
                payload: " error fetching data from the api"
            });
        });
};

export const POST = "POST";
export const SMURF_POST_START = "SMURF_POST_START";
export const SMURF_POST_SUCCESS = "SMURF_POST_SUCCESS";
export const SMURF_POST_FAILURE = "SMURF_POST_FAILURE";

export const postSmurf = value => dispatch => {
    dispatch({
        type: SMURF_POST_START,
        payload: value
    });
    console.log('postSmurf: ', value);
    axios
        .post(`http://localhost:3333/smurfs`, value)
        .then(res => {
            console.log('redux: post-actions: axios: then: res.data:', res);
            dispatch({
                type: SMURF_POST_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: SMURF_POST_FAILURE,
                payload: "error posting data"
            });
        });
};


export const SMURF_PUT_START = "SMURF_PUT_START";
export const SMURF_PUT_SUCCESS = "SMURF_PUT_SUCCESS";
export const SMURF_PUT_FAILURE = "SMURF_PUT_FAILURE";

export const putSmurf = id => dispatch => {
    dispatch({
        type: SMURF_PUT_START,
        payload: id
    });
    console.log('putSmurf: ', id);
    axios
        // .put(`http://localhost:3333/smurfs/${id}`, { name :'pol' or age or height : '$value'}})
        .put(`http://localhost:3333/smurfs/${id}`, id)
        .then(res => {
            dispatch({
                type: SMURF_PUT_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: SMURF_PUT_FAILURE,
                payload: "error posting data"
            });
        });
};
export const SMURF_DELETE_START = "SMURF_DELETE_START";
export const SMURF_DELETE_SUCCESS = "SMURF_DELETE_SUCCESS";
export const SMURF_DELETE_FAILURE = "SMURF_PUT_FAILURE";

export const deleteSmurf = id => dispatch =>{

    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            console.log("Data !!!", res);
            dispatch({
                type: SMURF_DELETE_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.error("error from fetching data from API", err);
            dispatch({
                type: SMURF_DELETE_FAILURE,
                payload: " error fetching data from the api"
            });
        });

}