import {
    FETCH_SMURFS_LOADING,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILED
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
          pokemon: action.payload,
          isFetching: false,
          
        };
      case FETCH_SMURFS_FAILED:
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