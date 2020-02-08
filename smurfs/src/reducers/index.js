import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
} from '../actions';

const initialState = {
  smurf: [],
  error: "",
  isFetching: false,
};

function reducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
          ...state,
          isFetching: true,
          smurf: []
      };
    case FETCH_SMURF_SUCCESS:
        return {
            ...state,
            isFetching: false,
            smurf: action.payload,
        };
    case FETCH_SMURF_FAILURE:
        return{
            ...state,         
            isFetching: false,
            error: action.payload
        };
    default:
        return state;
    }
  }

export default reducer;