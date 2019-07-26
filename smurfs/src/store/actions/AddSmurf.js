import axios from 'axios'



export const ADD_SMURF_START =   'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const Add_SMURF_FAILURE = 'Add_SMURF_FAILURE';



export const fetchSmurf = () => dispatch => {
  dispatch({type: ADD_SMURF_START});

  axios
    .post('http://localhost:3333/smurfs', smurf)

    .then(res => {
      console.log(res.data);
      dispatch({type:ADD_SMURF_SUCCESS, payload: res.data});
    })

    .catch((err => console.log(err.response)))

}