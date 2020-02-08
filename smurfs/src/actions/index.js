import axios from 'axios'; 

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch =>{
     dispatch({ type: FETCH_DATA });
     axios
     .get(`http://localhost:3333/smurfs`)
     .then(res => {
       console.log("Data coming back in actions API call", res);
       dispatch({ type: UPDATE_SMURFS, payload: res.data });
     })
        .catch(err => {
            console.error ("error from fetching data from API", err);
            dispatch({type :SET_ERROR, payload:" error fetching data from the api"});
        });
    };

export const POST = "POST";
export const SMURF_POST_START = "SMURF_POST_START";
export const SMURF_POST_SUCCESS = "SMURF_POST_SUCCESS";
export const SMURF_POST_FAILURE = "SMURF_POST_FAILURE";

export const postSmurf = value => dispatch => {
  dispatch({ type: SMURF_POST_START, payload: value });
  console.log(`postSmurf: `, value);
  axios
    .post(`http://localhost:3333/smurfs`, value)
    .then(res => {
      console.log(`redux: post-actions: axios: then: res.data: `, res);
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

export const SMURF_LOAD_START = "SMURF_LOAD_START";
export const SMURF_LOAD_SUCCESS = "SMURF_LOAD_SUCCESS";
export const SMURF_LOAD_FAILURE = "SMURF_LOAD_FAILURE";

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURF_LOAD_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
        // console.log(`actions: get-actions: axios.then: res.data: `, res.data);
      dispatch({
        type: SMURF_LOAD_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      //   console.log(`actions: get-actions: axios.catch: err: `, err);
      dispatch({
        type: SMURF_LOAD_FAILURE,
        payload: "error loading smurfs"
      });
    });
};
export const SMURF_PUT_START = "SMURF_PUT_START";
export const SMURF_PUT_SUCCESS = "SMURF_PUT_SUCCESS";
export const SMURF_PUT_FAILURE = "SMURF_PUT_FAILURE";

export const putSmurf = value => dispatch => {
  dispatch({ type: SMURF_PUT_START, payload: value });
  console.log(`putSmurf: `, value);
  axios
    .post(`http://localhost:3333/smurfs`, value)
    .then(res => {
      console.log(`redux: post-actions: axios: then: res.data: `, res);
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