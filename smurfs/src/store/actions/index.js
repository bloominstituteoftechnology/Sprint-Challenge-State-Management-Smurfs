import axios from 'axios';


//ADD Smurf

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAIL = 'FETCH_SMURF_FAIL';




export const getSmurfs = () => dispatch => {
  dispatch ({type: FETCH_SMURF_START})
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    console.log(res.data, "get smurf")
    dispatch ({type: FETCH_SMURF_SUCCESS, payload: res.data})

  })
  .catch(err =>{
    dispatch ({ type: FETCH_SMURF_FAIL, payload: err.response})
  })
}


export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAIL = 'ADD_SMURF_FAIL';

export const addSmurfs = smurf => dispatch => {
dispatch ({type: ADD_SMURF_START})
axios
.post('http://localhost:3333/smurfs', smurf)
.then(res => {
  console.log(res, "addingSmurf")
   dispatch ({type: ADD_SMURF_SUCCESS, payload: res.data})
    })
    .catch(err =>{
        dispatch ({ type: ADD_SMURF_FAIL, payload: err.response})
    })
}
