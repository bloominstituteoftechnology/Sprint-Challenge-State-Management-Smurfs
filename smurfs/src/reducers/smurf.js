import {
SMURF_NAME,
SMURF_NAME_SUCCESS,
SMURF_NAME_ERROR
} from '../actions/smurf';

const initialState = {
  smurfs: [],
  isLoading: false,
  error: null,
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SMURF_NAME:
      return {
        ...state,
        isLoading: true
      };
    case SMURF_NAME_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    case SMURF_NAME_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: true
      };

    default:
      return state;
  }
}