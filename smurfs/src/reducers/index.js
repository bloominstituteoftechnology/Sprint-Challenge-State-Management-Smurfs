//1. Initialize state in the reducer
import { ActionTypes } from "../actions/index";

const initialState = {
  smurfs: [],
  isFetching: false,
  error: null,
};

//2. Create Reducer Function

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SMURFS:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case ActionTypes.FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: null,
      };
    case ActionTypes.FETCH_SMURFS_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
