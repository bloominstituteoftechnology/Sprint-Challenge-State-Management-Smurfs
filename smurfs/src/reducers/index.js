import {
    FETCH_SMURFS_LOADING,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILED,
    ADD_SMURF_LOADING,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILED
  } from "../actions";
  
const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
  };
  
  export const reducer = (state = initialState, action) => {
    console.log("reducer", action);
    switch (action.type) {
      case FETCH_SMURFS_LOADING:
        return {
          ...state,
          isFetching: true,
          
          
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          
        };
      case FETCH_SMURFS_FAILED:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };


        case ADD_SMURF_LOADING:
        return {
          ...state,
          isFetching: true,          
        };
      case ADD_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.post,
          isFetching: false,
          
        };
      case ADD_SMURF_FAILED:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;