import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_ERROR = "SMURF_FETCH_ERROR";
export const ADD_SMURF = "ADD_SMURF";

export const fetchSmurfs = () => {
  const promise = axios.get(`http://localhost:3333/smurfs`);
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS }); 
    promise
      .then(response => {
        console.log(response.data);
        dispatch({ type: SMURF_FETCH_SUCCESS, payload: response.data }); 
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: SMURF_FETCH_ERROR }); 
      });
  };
};

export const addSmurf = () => dispatch => {
  axios.post('http://localhost:3333/smurfs')
  .then( data => 
    dispatch({ 
      type: ADD_SMURF, 
      payload: {
        name: '',
        age: '', 
        height: ''
      }
  }))
}

