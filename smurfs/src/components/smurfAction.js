import axios from "axios";

export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURF_FETCH_SUCCESS = "SMURF_FETCH_SUCCESS";
export const SMURF_FETCH_ERROR = "SMURF_FETCH_ERROR";

export const TOGGLE_EDIT = "TOGGLE_EDIT";

export const POST_NEW_SMURF_START = 'POST_NEW_SMURF_START'
export const POST_NEW_SMURF_SUCCESS = 'POST_NEW_SMURF_SUCCESS'
export const POST_NEW_SMURF_FAILURE = 'POST_NEW_SMURF_FAILURE'

export const UPDATE_SMURF_START = "UPDATE_SMURF_START";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";


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

// export const toggleEdit = () => {
//   return dispatch => {
//     dispatch({
//       type: TOGGLE_EDIT, editing: !editing
//     }) 
//   };
// }

      

export const postSmurf = (smurf) => dispatch => {
    dispatch({type: POST_NEW_SMURF_START});
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(response => {
          console.log(response.data)
          dispatch({type: POST_NEW_SMURF_SUCCESS})
      })
        .catch(err => { 
          console.log(err);
          dispatch({type: POST_NEW_SMURF_FAILURE})
      })
}



export const updateSmurf =  (id) => dispatch => {
  // dispatch({ type: UPDATE_SMURF_START});
  axios
    .put (`http://localhost:3333/smurfs/${id}`, id)
    .then (response => {
      console.log(response.data)
      dispatch({type: UPDATE_SMURF_SUCCESS, payload: response.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_SMURF_FAILURE })
    })
}


export const deleteSmurf =  (id) => dispatch => {
  console.log(id);
  dispatch({ type: DELETE_SMURF_START});
  axios
    .delete (`http://localhost:3333/smurfs/${id}`)
    .then (response => {
      console.log(response.data)
      dispatch({type: DELETE_SMURF_SUCCESS, payload: response.data})
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_SMURF_FAILURE })
    })
}