import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_ERROR = "SMURF_FETCH_ERROR";


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


export const UPDATE_SMURF = "UPDATE_SMURF";

export const updateSmurf = (smurf) => dispatch => {
  axios.put ('http://localhost:3333/smurfs/.id', smurf)
  .then (data => 
    console.log(data),
    dispatch({type: UPDATE_SMURF, payload: {name: ''}
    }))
}


export const POST_NEW_SMURF_START = 'POST_NEW_SMURF_START'
export const POST_NEW_SMURF_SUCCESS = 'POST_NEW_SMURF_SUCCESS'
export const POST_NEW_SMURF_FAILURE = 'POST_NEW_SMURF_FAILURE'

export const postSmurf = (smurf) => dispatch => {
    dispatch({type: POST_NEW_SMURF_START});
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response => console.log(response.data))
        dispatch({type: POST_NEW_SMURF_SUCCESS})
        .catch(err => console.log(err));
        dispatch({type: POST_NEW_SMURF_FAILURE});
}