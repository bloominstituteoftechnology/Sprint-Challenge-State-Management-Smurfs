// Actions
import {
  FETCH_SMURF_SUCCESS,
  POST_SMURF_SUCCESS,
  DELETE_SMURF_SUCCESS,
} from "../actions";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case FETCH_SMURF_SUCCESS:
      return [...state.concat(action.payload)];
    case POST_SMURF_SUCCESS:
      return [...action.payload];

    case DELETE_SMURF_SUCCESS:
      return [...action.payload];
    default:
      return state;
  }
}

export { reducer, initialState };
